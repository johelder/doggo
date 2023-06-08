import type { TCoordinates, TFoods } from '../common';
import type { TPersistanceAddress } from '.';

export interface IPersistanceFeeder {
  id: string;
  user: {
    id: string;
    name: string;
  };
  coordinates: TCoordinates;
  address: TPersistanceAddress;
  foods: TFoods;
}
