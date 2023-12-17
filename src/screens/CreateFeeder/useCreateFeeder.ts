import { useRef } from 'react';

import { IFeederFormRef } from '@app/src/components/FeederForm/types';
import firestore from '@react-native-firebase/firestore';
import { useNavigation, useRoute } from '@react-navigation/native';

import { FeederDomain } from '@data';
import { useFeederCreate } from '@domain';
import { useAuth } from '@hooks';
import { IFeederAddress, TRootStackScreenProps } from '@types';
import { showToast } from '@utils';

export function useCreateFeeder() {
  const { user } = useAuth();
  const feederFormRef = useRef<IFeederFormRef>(null);

  const { createFeeder, isPending } = useFeederCreate({
    onSuccess: () => {
      showToast({ type: 'success', message: 'Comedouro criado com sucesso.' });
      feederFormRef.current?.clearFields();
      navigateToMyFeedersAndResetPreviousPages();
    },
    onError: () => {
      showToast({
        type: 'error',
        message:
          'Ocorreu um erro ao criar seu comedouro, por favor, tente novamente mais tarde.',
      });
    },
  });

  const route = useRoute<TRootStackScreenProps<'CreateFeeder'>['route']>();
  const navigation = useNavigation();

  function navigateToMyFeedersAndResetPreviousPages() {
    navigation.reset({
      index: 1,
      routes: [
        { name: 'HomeTabs', state: { routes: [{ name: 'Profile' }] } },
        { name: 'MyFeeders' },
      ],
    });
  }

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
    if (hasSomeMandatoryFieldNotFilled()) {
      showToast({
        type: 'warning',
        message: 'Preencha todos os campos obrigatórios para continuar.',
        duration: 4000,
      });

      return;
    }

    if (!user) {
      return;
    }

    const address = {
      ...route.params.address,
      houseNumber: addressNumber,
      complement: addressComplement,
      reference: addressReference,
    };
    const maintenance = {
      updatedAt: firestore.FieldValue.serverTimestamp(),
      updatedBy: {
        userId: user.id,
        userName: user.name,
      },
    };

    const feeder: Omit<FeederDomain, 'id'> = {
      user: {
        id: user.id,
        name: user.name,
      },
      coordinates: route.params.coordinate,
      address,
      foods: feederFoods,
      maintenanceStatus: {
        supply: maintenance,
        cleaning: maintenance,
      },
    };

    createFeeder(feeder);
  }

  return {
    handleCreateFeeder,
    feederFormRef,
    isPending,
  };
}
