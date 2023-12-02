import { useRef } from 'react';

import { IFeederFormRef } from '@app/src/components/FeederForm/types';
import firestore from '@react-native-firebase/firestore';
import { useNavigation, useRoute } from '@react-navigation/native';

import { useAuth } from '@hooks';
import { FeedersRepository } from '@services';
import { IFeeder, IFeederAddress, TRootStackScreenProps } from '@types';
import { errorHandler, showToast } from '@utils';

export function useCreateFeeder() {
  const { user } = useAuth();
  const feederFormRef = useRef<IFeederFormRef>(null);

  const route = useRoute<TRootStackScreenProps<'CreateFeeder'>['route']>();
  const navigation = useNavigation();

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

      if (!user?.name) {
        return;
      }

      const feeder: IFeeder = {
        user: {
          id: user.id,
          name: user.name,
        },
        coordinates: {
          latitude: route.params.coordinate.latitude,
          longitude: route.params.coordinate.longitude,
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
