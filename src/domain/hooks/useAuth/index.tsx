import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react';

import { WEB_CLIENT_ID } from '@env';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
  NativeModuleError,
} from '@react-native-google-signin/google-signin';

import { UserDomain, UserRepository } from '@data';
import { useUserCreate } from '@domain';
import { errorHandler, showToast } from '@utils';

import { IAuthContext, IAuthContextProps } from './types';

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

function AuthContextProvider({
  children,
}: IAuthContextProps): React.JSX.Element {
  const [user, setUser] = useState<UserDomain | null>(null);
  const [isLoadingSignIn, setIsLoadingSignIn] = useState(false);
  const [isLoadingAuthState, setIsLoadingAuthState] = useState(true);

  const { createUser } = useUserCreate();

  async function onAuthStateChanged(userState: FirebaseAuthTypes.User | null) {
    if (!userState) {
      setUser(null);

      return;
    }

    const storedUser = await UserRepository.findById(userState.uid);

    setUser(storedUser);
  }

  const handleSignInWithGoogle = useCallback(async () => {
    try {
      setIsLoadingSignIn(true);

      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });

      const { idToken } = await GoogleSignin.signIn();

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      const response = await auth().signInWithCredential(googleCredential);

      if (response.additionalUserInfo?.isNewUser) {
        const newUser: UserDomain = {
          id: response.user.uid,
          name: response.user.displayName,
          email: response.user.email,
          photo: response.user.photoURL,
          favorites: [],
        };

        createUser(newUser);
        setUser(newUser);

        return;
      }

      const storedUser = await UserRepository.findById(response.user.uid);

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
      setIsLoadingSignIn(false);
    }
  }, [createUser]);

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
        isLoadingSignIn,
        isLoadingAuthState,
        setIsLoadingAuthState,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthContextProvider, useAuth };
