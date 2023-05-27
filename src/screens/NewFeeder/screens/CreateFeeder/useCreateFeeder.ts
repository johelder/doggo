import { useState } from 'react';
import database from '@react-native-firebase/database';
import { RouteProp, useRoute } from '@react-navigation/native';

import { useAuth, useMap } from '@src/hooks';

import { TFood } from '@src/models/food';
import { TRootStackParamList } from '@src/routes/authenticated/types';

export function useCreateFeeder() {
  const [addressNumber, setAddressNumber] = useState('');
  const [addressComplement, setAddressComplement] = useState('');
  const [addressReference, setAddressReference] = useState('');
  const [feederFoods, setFeederFoods] = useState({
    dog: false,
    cat: false,
    others: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useAuth();
  const { currentUserLocation } = useMap();

  const route = useRoute<RouteProp<TRootStackParamList, 'CreateFeeder'>>();

  function handleToggleFeedFoods(food: TFood) {
    setFeederFoods(prevFoods => ({
      ...prevFoods,
      [food]: !prevFoods[food],
    }));
  }

  async function handleCreateFeeder() {
    try {
      setIsLoading(true);

      const newReference = database().ref('/feeders').push();

      const newFeeder = {
        user_id: user?.uid,
        coordinates: {
          latitude: currentUserLocation?.coords.latitude,
          longitude: currentUserLocation?.coords.longitude,
        },
        address: {
          street: route.params.address.street,
          neighborhood: route.params.address.neighborhood,
          city: route.params.address.city,
          house_number: addressNumber,
          complement: addressComplement,
          reference: addressReference,
        },
        foods: feederFoods,
      };

      await newReference.set(newFeeder);
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  }

  return {
    addressNumber,
    setAddressNumber,
    addressComplement,
    setAddressComplement,
    addressReference,
    setAddressReference,
    handleToggleFeedFoods,
    feederFoods,
    handleCreateFeeder,
    isLoading,
  };
}
