import { useRef } from 'react';

import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import { useNavigation, useRoute } from '@react-navigation/native';

import { FeederFormRefProps } from '@components';
import { FeederDomain } from '@data';
import { FeederFormFields, useFeederCreate, useAuth } from '@domain';
import { AppScreenProps } from '@routes';
import { showToast } from '@utils';

export function useCreateFeeder() {
  const { user } = useAuth();
  const feederFormRef = useRef<FeederFormRefProps>(null);

  const { createFeeder, isPending } = useFeederCreate({
    onSuccess: () => {
      showToast({ type: 'success', message: 'Comedouro criado com sucesso.' });
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

  const route = useRoute<AppScreenProps<'CreateFeeder'>['route']>();
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
    houseNumber,
    complement,
    reference,
    foods,
  }: FeederFormFields) {
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

    const maintenance = {
      updatedAt:
        firestore.FieldValue.serverTimestamp() as FirebaseFirestoreTypes.Timestamp,
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
      address: {
        ...route.params.address,
        houseNumber,
        complement,
        reference,
      },
      foods,
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
