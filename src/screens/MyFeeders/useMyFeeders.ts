import { useCallback, useEffect, useRef, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { Modalize } from 'react-native-modalize';

import { errorHandler, showToast } from '@src/utils';
import { FeedersRepository } from '@src/services/database/repositories/FeedersRepository';

import type { IDomainFeeder } from '@src/types/domain';
import type { TPageStatus } from '@src/types/common';
import type { TNavigationProps } from '@src/routes/authenticated/types';

export function useMyFeeders() {
  const [feeders, setFeeders] = useState<IDomainFeeder[]>([]);
  const [pageStatus, setPageStatus] = useState<TPageStatus>('idle');
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [currentFeederToEdit, setCurrentFeederToEdit] =
    useState<IDomainFeeder | null>(null);
  const detailsModalRef = useRef<Modalize>(null);

  const isScreenFocused = useIsFocused();

  const navigation = useNavigation<TNavigationProps<'MyFeeders'>>();

  function handleRedirectToSelectLocation() {
    navigation.navigate('SelectLocation');
  }

  function handleTryAgain() {
    getFeeders();
  }

  function handleOpenDetailsModal(feeder: IDomainFeeder) {
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
      getFeeders();
    } catch (error) {
      errorHandler.reportError(error, 'handleDeleteFeeder');

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

  function handleNavigateToSelectLocation() {
    navigation.navigate('SelectLocation', {
      feederId: currentFeederToEdit?.id,
    });
  }

  const getFeeders = useCallback(async () => {
    try {
      setPageStatus('loading');

      const response = await FeedersRepository.findAll();

      setFeeders(response);
      setPageStatus('success');
    } catch (error) {
      setPageStatus('error');
      errorHandler.reportError(error, 'getFeeders');
    }
  }, []);

  useEffect(() => {
    if (isScreenFocused) {
      getFeeders();
    }
  }, [getFeeders, isScreenFocused]);

  return {
    feeders,
    pageStatus,
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
