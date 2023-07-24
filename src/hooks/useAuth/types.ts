import { IDomainUser } from '@src/types/domain';
import type { ReactNode } from 'react';

export interface IAuthContext {
  user: IDomainUser | null;
  handleSignInWithGoogle: () => Promise<void>;
  handleSignOut: () => Promise<void>;
  isUserLogged: boolean;
  isLoadingAuth: boolean;
}

export interface IAuthContextProps {
  children: ReactNode;
}
