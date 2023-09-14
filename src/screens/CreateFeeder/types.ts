import type { TFoods } from '@types';

export interface IFeederAddress {
  addressNumber: string;
  addressComplement: string;
  addressReference: string;
  feederFoods: TFoods;
}
