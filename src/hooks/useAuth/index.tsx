import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import { errorHandler, showToast } from '@src/utils';

import type { IAuthContext, IAuthContextProps, IUser } from './types';
import { WEB_CLIENT_ID } from '@env';

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

function AuthContextProvider({ children }: IAuthContextProps): JSX.Element {
  const [user, setUser] = useState<IUser>(null);
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);

  function onAuthStateChanged(userState: IUser) {
    setUser(userState);
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

      setUser(response.user);
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
