import { useState } from 'react';
import { TFood } from '@src/types/common';
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
  const [isLoading, setIsLoading] = useState(false);

  function handleToggleFeedFoods(food: TFood) {
    setFeederFoods(prevFoods => ({
      ...prevFoods,
      [food]: !prevFoods[food],
    }));
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
  };
}
