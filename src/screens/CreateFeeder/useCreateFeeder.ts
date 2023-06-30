import { useRef } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { FeedersRepository } from '@src/services/database/repositories/FeedersRepository';
import { useAuth, useMap } from '@src/hooks';
import { errorHandler, showToast } from '@src/utils';

import { IDomainFeeder } from '@src/types/domain';
import type {
  TNavigationProps,
  TRouteProps,
} from '@src/routes/authenticated/types';
import type { IFeederFormRef } from '@src/components/FeederForm/types';
import type { IFeederAddress } from './types';

export function useCreateFeeder() {
  const { user } = useAuth();
  const { currentUserLocation } = useMap();
  const feederFormRef = useRef<IFeederFormRef>(null);

  const route = useRoute<TRouteProps<'CreateFeeder'>>();
  const navigation = useNavigation<TNavigationProps<'CreateFeeder'>>();

  function hasSomeMandatoryFieldNotFilled() {
    return (
      Object.values(feederFormRef.current?.feederFoods || {}).every(
        food => !food,
      ) || !feederFormRef.current?.addressNumber
    );
  }

  async function handleCreateFeeder({
    addressNumber,
    addressComplement,
    addressReference,
    feederFoods,
  }: IFeederAddress) {
    try {
      if (hasSomeMandatoryFieldNotFilled()) {
        showToast({
          type: 'warning',
          message: 'Preencha todos os campos obrigatórios para continuar.',
          duration: 4000,
        });

        return;
      }

      if (!user?.displayName || !currentUserLocation) {
        return;
      }

      const feeder = {
        user: {
          id: user.uid,
          name: user.displayName,
        },
        coordinates: {
          latitude: currentUserLocation?.coords.latitude,
          longitude: currentUserLocation?.coords.longitude,
        },
        address: {
          ...route.params.address,
          houseNumber: addressNumber,
          complement: addressComplement,
          reference: addressReference,
        },
        foods: feederFoods,
      };

      await FeedersRepository.create(feeder as IDomainFeeder);

      showToast({
        type: 'success',
        message: 'Comedouro criado com sucesso.',
        duration: 4000,
      });

      feederFormRef.current?.clearFields();

      navigation.navigate('MyFeeders');
    } catch (error) {
      showToast({
        type: 'error',
        message:
          'Ocorreu um erro ao criar seu comedouro, por favor, tente novamente mais tarde.',
        duration: 4000,
      });

      errorHandler.reportError(error, 'handleCreateFeeder');
    }
  }

  return {
    handleCreateFeeder,
    feederFormRef,
  };
}
