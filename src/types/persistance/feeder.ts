import type { TCoordinates, TFoods } from '../common';
import type { TPersistanceAddress } from '.';

export interface IPersistanceFeeder {
  user_id: string;
  coordinates: TCoordinates;
  address: TPersistanceAddress;
  foods: TFoods;
}
