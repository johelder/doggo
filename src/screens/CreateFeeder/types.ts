import type { TFoods } from '@src/types';

export interface IFeederAddress {
  addressNumber: string;
  addressComplement: string;
  addressReference: string;
  feederFoods: TFoods;
}
