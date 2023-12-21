import { AddressDomain, FoodDomain } from '@data';

export interface FeederFormFields {
  houseNumber: AddressDomain['houseNumber'];
  complement: AddressDomain['complement'];
  reference: AddressDomain['reference'];
  foods: FoodDomain;
}
