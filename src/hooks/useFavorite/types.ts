import { IDomainFeeder } from '@src/types/domain';
import { ReactNode } from 'react';

export interface IFavoriteContextProps {
  isFavorite: (feederId: string | undefined) => boolean;
  handleToggleFavoriteFeeder: (feeder: IDomainFeeder | null) => void;
}

export interface IFavoriteProviderProps {
  children: ReactNode;
}
