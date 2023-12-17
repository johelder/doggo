import { useState } from 'react';

import { TFood, IFeeder } from '@types';

import { IUseFeederFormProps } from './types';

export function useFeederForm({ onSubmit }: IUseFeederFormProps) {
  const [addressNumber, setAddressNumber] = useState('');
  const [addressComplement, setAddressComplement] = useState('');
  const [addressReference, setAddressReference] = useState('');
  const [feederFoods, setFeederFoods] = useState({
    dog: false,
    cat: false,
    others: false,
  });

  function handleToggleFeedFoods(food: TFood) {
    setFeederFoods(prevFoods => ({
      ...prevFoods,
      [food]: !prevFoods[food],
    }));
  }

  function populateFields(feeder: IFeeder) {
    setAddressNumber(feeder.address.houseNumber);
    setAddressComplement(feeder.address.complement ?? '');
    setAddressReference(feeder.address.reference ?? '');
    setFeederFoods(feeder.foods);
  }

  function clearFields() {
    setAddressNumber('');
    setAddressComplement('');
    setAddressReference('');
    setFeederFoods({
      dog: false,
      cat: false,
      others: false,
    });
  }

  async function handleSubmit() {
    await onSubmit({
      addressNumber,
      addressComplement,
      addressReference,
      feederFoods,
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
    clearFields,
    populateFields,
  };
}
