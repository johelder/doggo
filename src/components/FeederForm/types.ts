import { TFoods, IFeeder, IFeederAddress } from '@types';

export interface IFeederFormProps {
  onSubmit: (feederAddress: IFeederAddress) => Promise<void>;
  isLoading?: boolean;
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
