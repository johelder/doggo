import { useCallback, useEffect, useRef } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { FeedersRepository } from '@src/services/database/repositories/FeedersRepository';
import { useAuth, useMap } from '@src/hooks';
import { errorHandler, showToast } from '@src/utils';

import type {
  TNavigationProps,
  TRouteProps,
} from '@src/routes/authenticated/types';
import type { IFeederFormRef } from '@src/components/FeederForm/types';
import type { IFeederAddress } from './types';

export function useEditFeeder() {
  const { user } = useAuth();
  const { currentUserLocation } = useMap();
  const feederFormRef = useRef<IFeederFormRef>(null);

  const route = useRoute<TRouteProps<'EditFeeder'>>();
  const navigation = useNavigation<TNavigationProps<'EditFeeder'>>();
  const feederId = route.params.feederId;

  function hasSomeMandatoryFieldNotFilled() {
    return (
      Object.values(feederFormRef.current?.feederFoods || {}).every(
        food => !food,
      ) || !feederFormRef.current?.addressNumber
    );
  }

  async function handleUpdateFeeder({
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

      const payload = {
        id: feederId,
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

      await FeedersRepository.update(payload);
      feederFormRef.current?.clearFields();

      showToast({
        type: 'success',
        message: 'Comedouro atualizado com sucesso.',
        duration: 4000,
      });

      navigation.navigate('MyFeeders');
    } catch (error) {
      showToast({
        type: 'error',
        message:
          'Ocorreu um erro ao atualizar seu comedouro, por favor, tente novamente mais tarde.',
        duration: 4000,
      });

      errorHandler.reportError(error, handleUpdateFeeder.name);
    }
  }

  const fetchFeederInformation = useCallback(async () => {
    try {
      const feeder = await FeedersRepository.findById(feederId);

      if (!feeder) {
        showToast({
          type: 'warning',
          message:
            'Comedouro não encontrado, por favor, tente novamente mais tarde.',
          duration: 4000,
        });

        return;
      }

      feederFormRef.current?.populateFields(feeder);
    } catch (error) {
      errorHandler.reportError(error, fetchFeederInformation.name);

      showToast({
        type: 'error',
        message:
          'Ocorreu um erro no servidor, por favor, tente novamente mais tarde.',
        duration: 4000,
      });
    }
  }, [feederId]);

  useEffect(() => {
    fetchFeederInformation();
  }, [fetchFeederInformation]);

  return {
    handleUpdateFeeder,
    feederFormRef,
  };
}
