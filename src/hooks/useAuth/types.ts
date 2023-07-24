import type { ReactNode } from 'react';

export type IUser = {
  uid: string;
  displayName: string | null;
  photoURL: string | null;
} | null;

export interface IAuthContext {
  user: IUser;
  handleSignInWithGoogle: () => Promise<void>;
  handleSignOut: () => Promise<void>;
  isUserLogged: boolean;
  isLoadingAuth: boolean;
}

export interface IAuthContextProps {
  children: ReactNode;
}
