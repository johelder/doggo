import type { TDefaultScreensProps } from '@src/routes/authenticated/types';
import type { TFoods } from '@src/types/common';

export type TEditFeederProps = TDefaultScreensProps<'EditFeeder'>;

export interface IFeederAddress {
  addressNumber: string;
  addressComplement: string;
  addressReference: string;
  feederFoods: TFoods;
}
