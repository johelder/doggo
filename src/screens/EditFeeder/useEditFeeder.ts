import { useEffect, useRef } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';

import { FeederFormRefProps } from '@components';
import { FeederDomain } from '@data';
import {
  useFeederUpdate,
  useFeederFindOne,
  FeederFormFields,
  useMap,
} from '@domain';
import { AppScreenProps } from '@routes';
import { showToast } from '@utils';

export function useEditFeeder() {
  const { currentUserLocation } = useMap();
  const feederFormRef = useRef<FeederFormRefProps>(null);

  const route = useRoute<AppScreenProps<'EditFeeder'>['route']>();
  const navigation = useNavigation();
  const feederId = route.params.feederId;

  const { updateFeeder, isPending } = useFeederUpdate({
    onSuccess: () => {
      showToast({
        type: 'success',
        message: 'Comedouro atualizado com sucesso.',
      });

      navigateToMyFeedersAndResetPreviousPages();
    },
    onError: () => {
      showToast({
        type: 'error',
        message:
          'Ocorreu um erro ao atualizar seu comedouro, por favor, tente novamente mais tarde.',
      });
    },
  });
  const { feeder, isSuccess } = useFeederFindOne({ id: feederId });

  function hasSomeMandatoryFieldNotFilled() {
    return (
      Object.values(feederFormRef.current?.feederFoods || {}).every(
        food => !food,
      ) || !feederFormRef.current?.addressNumber
    );
  }

  function navigateToMyFeedersAndResetPreviousPages() {
    navigation.reset({
      index: 1,
      routes: [
        { name: 'HomeTabs', state: { routes: [{ name: 'Profile' }] } },
        { name: 'MyFeeders' },
      ],
    });
  }

  async function handleUpdateFeeder({
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

    if (!feeder) {
      return;
    }

    const payload: FeederDomain = {
      ...feeder,
      coordinates: currentUserLocation,
      address: {
        ...route.params.address,
        houseNumber,
        complement,
        reference,
      },
      foods,
    };

    updateFeeder(payload);
  }

  useEffect(() => {
    if (isSuccess && feeder) {
      feederFormRef.current?.populateFields(feeder);
    }
  }, [feeder, isSuccess]);

  return {
    handleUpdateFeeder,
    feederFormRef,
    isPending,
  };
}
