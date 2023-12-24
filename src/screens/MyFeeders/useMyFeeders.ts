import { useRef, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { Modalize } from 'react-native-modalize';

import { FeederDomain } from '@data';
import { useFeederList, useFeederRemove } from '@domain';
import { useAuth } from '@hooks';
import { showToast } from '@utils';

export function useMyFeeders() {
  const [currentFeederToEdit, setCurrentFeederToEdit] =
    useState<FeederDomain | null>(null);

  const detailsModalRef = useRef<Modalize>(null);
  const { user } = useAuth();

  const { feederList, isError, isLoading, isRefetching, refetch } =
    useFeederList(user?.id!);
  const { removeFeeder } = useFeederRemove({
    onSuccess: () => {
      showToast({
        type: 'success',
        message: 'Comedouro deletado com sucesso.',
      });

      handleCloseDetailsModal();
    },
    onError: () => {
      showToast({
        type: 'error',
        message:
          'Ocorreu um erro ao deletar, por favor, tente novamente mais tarde.',
      });
    },
  });

  const navigation = useNavigation();

  function handleNavigateToSelectLocation() {
    navigation.navigate('SelectLocation', {
      feederId: currentFeederToEdit?.id ?? undefined,
    });
  }

  function handleOpenDetailsModal(feeder: FeederDomain) {
    setCurrentFeederToEdit(feeder);
    detailsModalRef.current?.open();
  }

  function handleCloseDetailsModal() {
    setCurrentFeederToEdit(null);
    detailsModalRef.current?.close();
  }

  return {
    feederList,
    isError,
    isLoading,
    isRefetching,
    handleTryAgain: refetch,
    detailsModalRef,
    handleOpenDetailsModal,
    handleCloseDetailsModal,
    currentFeederToEdit,
    removeFeeder,
    handleNavigateToSelectLocation,
  };
}
