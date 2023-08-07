import type { ReactNode } from 'react';
import type { IUser } from '@src/types';

export interface IAuthContext {
  user: IUser | null;
  handleSignInWithGoogle: () => Promise<void>;
  handleSignOut: () => Promise<void>;
  isUserLogged: boolean;
  isLoadingAuth: boolean;
}

export interface IAuthContextProps {
  children: ReactNode;
}
