import { Dispatch, ReactNode, SetStateAction } from 'react';

import { IUser } from '@types';

export interface IAuthContext {
  user: IUser | null;
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
