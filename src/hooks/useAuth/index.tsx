import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react';

import {
  GoogleSignin,
  statusCodes,
  NativeModuleError,
} from '@react-native-google-signin/google-signin';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { errorHandler, showToast } from '@src/utils';
import { UsersRepository } from '@src/services/database/repositories/UsersRepository';
import { useStorage } from '../useStorage';
import { IS_FIRST_ACCESS_KEY } from '../useStorage/constants';

import { WEB_CLIENT_ID } from '@env';

import type { IUser } from '@src/types';
import type { IAuthContext, IAuthContextProps } from './types';

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

function AuthContextProvider({ children }: IAuthContextProps): JSX.Element {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);
  const { setValueInStorage } = useStorage(IS_FIRST_ACCESS_KEY, true);

  async function onAuthStateChanged(userState: FirebaseAuthTypes.User | null) {
    if (!userState) {
      setUser(null);

      return;
    }

    const storedUser = await UsersRepository.findById(userState.uid);

    setValueInStorage(false);
    setUser(storedUser);
  }

  const handleSignInWithGoogle = useCallback(async () => {
    try {
      setIsLoadingAuth(true);

      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });

      const { idToken } = await GoogleSignin.signIn();

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      const response = await auth().signInWithCredential(googleCredential);

      if (response.additionalUserInfo?.isNewUser) {
        const newUser = {
          id: response.user.uid,
          name: response.user.displayName,
          email: response.user.email,
          photo: response.user.photoURL,
          favorites: [],
        };

        await UsersRepository.create(newUser);

        setUser(newUser);
        setValueInStorage(false);

        return;
      }

      const storedUser = await UsersRepository.findById(response.user.uid);

      setValueInStorage(false);
      setUser(storedUser);
    } catch (error) {
      const googleSignInError = error as NativeModuleError;

      if (googleSignInError.code === statusCodes.SIGN_IN_CANCELLED) {
        return;
      }

      showToast({
        type: 'error',
        message:
          'Ocorreu um erro no servidor, por favor, tente novamente mais tarde.',
        duration: 5000,
      });

      errorHandler.reportError(error, handleSignInWithGoogle.name);
    } finally {
      setIsLoadingAuth(false);
    }
  }, [setValueInStorage]);

  const handleSignOut = useCallback(async () => {
    try {
      await Promise.all([
        GoogleSignin.revokeAccess(),
        GoogleSignin.signOut(),
        auth().signOut(),
      ]);
    } catch (error) {
      errorHandler.reportError(error, handleSignOut.name);
    }
  }, []);

  const isUserLogged = useMemo(() => !!user, [user]);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
    });
  }, []);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        handleSignInWithGoogle,
        handleSignOut,
        isUserLogged,
        isLoadingAuth,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthContextProvider, useAuth };
