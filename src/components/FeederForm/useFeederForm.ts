import { useState } from 'react';

import { FeederDomain, FoodDomain } from '@data';

import { FeederFormProps } from './types';

export function useFeederForm({ onSubmit }: Pick<FeederFormProps, 'onSubmit'>) {
  const [addressNumber, setAddressNumber] = useState('');
  const [addressComplement, setAddressComplement] = useState('');
  const [addressReference, setAddressReference] = useState('');
  const [feederFoods, setFeederFoods] = useState<FoodDomain>({
    dog: false,
    cat: false,
    others: false,
  });

  function handleToggleFeedFoods(food: keyof FoodDomain) {
    setFeederFoods(prevFoods => ({
      ...prevFoods,
      [food]: !prevFoods[food],
    }));
  }

  function populateFields(feeder: FeederDomain) {
    setAddressNumber(feeder.address.houseNumber);
    setAddressComplement(feeder.address.complement ?? '');
    setAddressReference(feeder.address.reference ?? '');
    setFeederFoods(feeder.foods);
  }

  async function handleSubmit() {
    await onSubmit({
      houseNumber: addressNumber,
      complement: addressComplement,
      reference: addressReference,
      foods: feederFoods,
    });
  }

  return {
    addressNumber,
    setAddressNumber,
    addressComplement,
    setAddressComplement,
    addressReference,
    setAddressReference,
    feederFoods,
    handleToggleFeedFoods,
    handleSubmit,
    populateFields,
  };
}
