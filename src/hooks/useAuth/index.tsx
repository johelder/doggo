import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { errorHandler, showToast } from '@src/utils';
import { UsersRepository } from '@src/services/database/repositories/UsersRepository';

import { WEB_CLIENT_ID } from '@env';

import type { IAuthContext, IAuthContextProps } from './types';
import type { IDomainUser } from '@src/types/domain';

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

function AuthContextProvider({ children }: IAuthContextProps): JSX.Element {
  const [user, setUser] = useState<IDomainUser | null>(null);
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);

  async function onAuthStateChanged(userState: FirebaseAuthTypes.User | null) {
    if (!userState) {
      setUser(null);

      return;
    }

    const storedUser = await UsersRepository.findById(userState.uid);

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

        return;
      }

      const storedUser = await UsersRepository.findById(response.user.uid);

      setUser(storedUser);
    } catch (error) {
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
  }, []);

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
