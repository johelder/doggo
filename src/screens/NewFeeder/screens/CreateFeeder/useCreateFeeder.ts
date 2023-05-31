import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { FeedersRepository } from '@src/services/database/repositories/FeedersRepository';
import { useAuth, useMap } from '@src/hooks';
import { errorHandler, showToast } from '@src/utils';

import { IDomainFeeder } from '@src/types/domain';
import type { TFood } from '@src/types/common';
import type {
  TNavigationProps,
  TRouteProps,
} from '@src/routes/authenticated/types';

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

  const route = useRoute<TRouteProps<'CreateFeeder'>>();
  const navigation = useNavigation<TNavigationProps<'CreateFeeder'>>();

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

  async function handleCreateFeeder() {
    try {
      setIsLoading(true);

      if (!user || !currentUserLocation) {
        return;
      }

      const feeder: IDomainFeeder = {
        userId: user?.uid,
        coordinates: {
          latitude: currentUserLocation?.coords.latitude,
          longitude: currentUserLocation?.coords.longitude,
        },
        address: { ...route.params.address },
        foods: feederFoods,
      };

      await FeedersRepository.create(feeder);

      showToast({
        type: 'success',
        message: 'Comedouro criado com sucesso.',
        duration: 5000,
      });

      clearFields();

      navigation.navigate('MyFeeders');
    } catch (error) {
      showToast({
        type: 'error',
        message:
          'Ocorreu um erro ao criar seu comedouro, por favor, tente novamente mais tarde.',
        duration: 5000,
      });

      errorHandler.reportError(error, 'handleCreateFeeder');
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
