import type { IFeederAddress } from '@src/screens/CreateFeeder/types';
import type { TFoods } from '@src/types/common';
import { IDomainFeeder } from '@src/types/domain';

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
  populateFields: (feeder: IDomainFeeder) => void;
};
