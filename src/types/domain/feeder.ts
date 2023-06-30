import type { TCoordinates, TFoods } from '../common';
import type { TDomainAddress } from '.';

export interface IDomainFeeder {
  id: string;
  user: {
    id: string;
    name: string;
  };
  coordinates: TCoordinates;
  address: TDomainAddress;
  foods: TFoods;
}
