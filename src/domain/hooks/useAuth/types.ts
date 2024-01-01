import { Dispatch, ReactNode, SetStateAction } from 'react';

import { UserDomain } from '@data';

export interface IAuthContext {
  user: UserDomain | null;
  handleSignInWithGoogle: () => Promise<void>;
  handleSignOut: () => Promise<void>;
  isUserLogged: boolean;
  isLoadingSignIn: boolean;
  isLoadingAuthState: boolean;
  setIsLoadingAuthState: Dispatch<SetStateAction<boolean>>;
}

export interface IAuthContextProps {
  children: ReactNode;
}
