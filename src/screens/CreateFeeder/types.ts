import type { TDefaultScreensProps } from '@src/routes/authenticated/types';
import type { TFoods } from '@src/types';

export type TCreateFeederProps = TDefaultScreensProps<'CreateFeeder'>;

export interface IFeederAddress {
  addressNumber: string;
  addressComplement: string;
  addressReference: string;
  feederFoods: TFoods;
}
