import { ReactNode } from 'react';

import { FeederDomain } from '@data';

export interface IFavoriteContextProps {
  isFavorite: (feederId: string | undefined) => boolean;
  handleToggleFavoriteFeeder: (feeder: FeederDomain | null) => void;
}

export interface IFavoriteProviderProps {
  children: ReactNode;
}
