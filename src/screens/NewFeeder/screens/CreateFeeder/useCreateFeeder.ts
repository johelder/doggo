import { TFood } from '@src/models/food';
import { useState } from 'react';

export function useCreateFeeder() {
  const [addressNumber, setAddressNumber] = useState('');
  const [addressComplement, setAddressComplement] = useState('');
  const [addressReference, setAddressReference] = useState('');
  const [feederFoods, setFeederFoods] = useState({
    dog: false,
    cat: false,
    others: false,
  });

  const handleToggleFeedFoods = (food: TFood) => {
    setFeederFoods(prevFoods => ({
      ...prevFoods,
      [food]: !prevFoods[food],
    }));
  };

  return {
    addressNumber,
    setAddressNumber,
    addressComplement,
    setAddressComplement,
    addressReference,
    setAddressReference,
    handleToggleFeedFoods,
    feederFoods,
  };
}
