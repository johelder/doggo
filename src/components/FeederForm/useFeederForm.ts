import { useState } from 'react';
import type { TFood } from '@src/types/common';
import type { IUseFeederFormProps } from './types';
import type { IDomainFeeder } from '@src/types/domain';

export function useFeederForm({ onSubmit }: IUseFeederFormProps) {
  const [addressNumber, setAddressNumber] = useState('');
  const [addressComplement, setAddressComplement] = useState('');
  const [addressReference, setAddressReference] = useState('');
  const [feederFoods, setFeederFoods] = useState({
    dog: false,
    cat: false,
    others: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  function handleToggleFeedFoods(food: TFood) {
    setFeederFoods(prevFoods => ({
      ...prevFoods,
      [food]: !prevFoods[food],
    }));
  }

  function populateFields(feeder: IDomainFeeder) {
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
    setIsLoading(true);

    await onSubmit({
      addressNumber,
      addressComplement,
      addressReference,
      feederFoods,
    });

    setIsLoading(false);
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
    isLoading,
    setIsLoading,
    handleSubmit,
    clearFields,
    populateFields,
  };
}
