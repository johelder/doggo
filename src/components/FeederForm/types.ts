import type { IFeederAddress } from '@src/screens/CreateFeeder/types';
import type { TFoods, IFeeder } from '@src/types';

export interface IFeederFormProps {
  onSubmit: (feederAddress: IFeederAddress) => Promise<void>;
}

export interface IUseFeederFormProps {
  onSubmit: (feederAddress: IFeederAddress) => Promise<void>;
}

export type IFeederFormRef = {
  feederFoods: TFoods;
  addressNumber: string;
  clearFields: () => void;
  populateFields: (feeder: IFeeder) => void;
};
