import { ReactNode } from 'react';

export type IUser = {
  uid: string;
  displayName: string | null;
  photoURL: string | null;
} | null;

export interface IAuthContext {
  user: IUser;
  handleSignIn: () => Promise<void>;
  handleSignOut: () => Promise<void>;
  isUserLogged: boolean;
}

export interface IAuthContextProps {
  children: ReactNode;
}
