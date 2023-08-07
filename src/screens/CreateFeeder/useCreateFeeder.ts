import { useRef } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

import { FeedersRepository } from '@src/services/database/repositories/FeedersRepository';
import { useAuth, useMap } from '@src/hooks';
import { errorHandler, showToast } from '@src/utils';

import type {
  TNavigationProps,
  TRouteProps,
} from '@src/routes/authenticated/types';
import type { IFeeder } from '@src/types';
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

      if (!user?.name || !currentUserLocation) {
        return;
      }

      const feeder: IFeeder = {
        user: {
          id: user.id,
          name: user.name,
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
        maintenanceStatus: {
          supply: {
            updatedAt: firestore.FieldValue.serverTimestamp(),
            updatedBy: {
              userId: user.id,
              userName: user.name,
            },
          },
          cleaning: {
            updatedAt: firestore.FieldValue.serverTimestamp(),
            updatedBy: {
              userId: user.id,
              userName: user.name,
            },
          },
        },
      };

      await FeedersRepository.create(feeder);

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
