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

import { errorHandler } from '@src/utils';

import type { IAuthContext, IAuthContextProps, IUser } from './types';
import { WEB_CLIENT_ID } from '@env';

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

function AuthContextProvider({ children }: IAuthContextProps): JSX.Element {
  const [user, setUser] = useState<IUser>(null);
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);

  function onAuthStateChanged(userState: IUser) {
    setUser(userState);
  }

  const handleSignIn = useCallback(async () => {
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
      errorHandler.reportError(error, 'handleSignIn');
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
      errorHandler.reportError(error, 'handleSignOut');
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
        handleSignIn,
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
