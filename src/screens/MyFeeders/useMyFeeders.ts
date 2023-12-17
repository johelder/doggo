import { useRef, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { Modalize } from 'react-native-modalize';

import { FeederDomain } from '@data';
import { useFeederList } from '@domain';
import { useAuth } from '@hooks';
import { FeedersRepository } from '@services';
import { errorHandler, showToast } from '@utils';

export function useMyFeeders() {
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [currentFeederToEdit, setCurrentFeederToEdit] =
    useState<FeederDomain | null>(null);
  const detailsModalRef = useRef<Modalize>(null);
  const { user } = useAuth();

  const { feederList, isError, isFetching } = useFeederList(user?.id!);

  const navigation = useNavigation();

  function handleRedirectToSelectLocation() {
    navigation.navigate('SelectLocation');
  }

  function handleNavigateToSelectLocation() {
    navigation.navigate('SelectLocation', {
      feederId: currentFeederToEdit?.id,
    });
  }

  function handleTryAgain() {
    // getFeeders();
  }

  function handleOpenDetailsModal(feeder: FeederDomain) {
    setCurrentFeederToEdit(feeder);
    detailsModalRef.current?.open();
  }

  function handleCloseDetailsModal() {
    setCurrentFeederToEdit(null);
    detailsModalRef.current?.close();
  }

  async function handleDeleteFeeder(feederId: string) {
    try {
      setIsLoadingDelete(true);

      await FeedersRepository.delete(feederId);

      showToast({
        type: 'success',
        message: 'Comedouro deletado com sucesso.',
        duration: 3000,
      });

      handleCloseDetailsModal();
    } catch (error) {
      errorHandler.reportError(error, handleDeleteFeeder.name);

      showToast({
        type: 'error',
        message:
          'Ocorreu um erro ao deletar, por favor, tente novamente mais tarde.',
        duration: 3000,
      });
    } finally {
      setIsLoadingDelete(false);
    }
  }

  return {
    feederList,
    isError,
    isFetching,
    handleTryAgain,
    handleRedirectToSelectLocation,
    detailsModalRef,
    handleOpenDetailsModal,
    handleCloseDetailsModal,
    currentFeederToEdit,
    handleDeleteFeeder,
    isLoadingDelete,
    handleNavigateToSelectLocation,
  };
}
