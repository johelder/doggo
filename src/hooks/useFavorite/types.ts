import type { ReactNode } from 'react';
import type { IFeeder } from '@types';

export interface IFavoriteContextProps {
  isFavorite: (feederId: string | undefined) => boolean;
  handleToggleFavoriteFeeder: (feeder: IFeeder | null) => void;
}

export interface IFavoriteProviderProps {
  children: ReactNode;
}
