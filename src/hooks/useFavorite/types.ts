import { ReactNode } from 'react';

import { IFeeder } from '@types';

export interface IFavoriteContextProps {
  isFavorite: (feederId: string | undefined) => boolean;
  handleToggleFavoriteFeeder: (feeder: IFeeder | null) => void;
}

export interface IFavoriteProviderProps {
  children: ReactNode;
}
