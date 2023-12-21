import { FeederDomain, FoodDomain } from '@data';
import { FeederFormFields } from '@domain';

export interface FeederFormProps {
  onSubmit: (feederProps: FeederFormFields) => Promise<void>;
  isLoading?: boolean;
}

export type FeederFormRefProps = {
  feederFoods: FoodDomain;
  addressNumber: string;
  populateFields: (feeder: FeederDomain) => void;
};
