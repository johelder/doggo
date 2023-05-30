import type { TCoordinates, TFoods } from '../common';
import type { TDomainAddress } from '.';

export interface IDomainFeeder {
  userId: string;
  coordinates: TCoordinates;
  address: TDomainAddress;
  foods: TFoods;
}
