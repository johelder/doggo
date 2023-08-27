import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { FeedersRepository } from '@services';
import { useMap } from '@hooks';
import { errorHandler, showToast } from '@utils';

import type { IFeeder, TRootStackScreenProps } from '@types';
import type { IFeederFormRef } from '@app/src/components/FeederForm/types';
import type { IFeederAddress } from './types';

export function useEditFeeder() {
  const [currentFeederToEdit, setCurrentFeederToEdit] = useState<IFeeder>(
    {} as IFeeder,
  );
  const { currentUserLocation } = useMap();
  const feederFormRef = useRef<IFeederFormRef>(null);

  const route = useRoute<TRootStackScreenProps<'EditFeeder'>['route']>();
  const navigation = useNavigation();
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

      if (!currentUserLocation) {
        return;
      }

      const payload = {
        ...currentFeederToEdit,
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

      setCurrentFeederToEdit(feeder);
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
