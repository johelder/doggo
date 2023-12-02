import { useCallback, useEffect, useRef, useState } from 'react';

import { useIsFocused, useNavigation } from '@react-navigation/native';
import { Modalize } from 'react-native-modalize';

import { useAuth } from '@hooks';
import { FeedersRepository } from '@services';
import { TPageStatus, IFeeder } from '@types';
import { errorHandler, showToast } from '@utils';

export function useMyFeeders() {
  const [feeders, setFeeders] = useState<IFeeder[]>([]);
  const [pageStatus, setPageStatus] = useState<TPageStatus>('idle');
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [currentFeederToEdit, setCurrentFeederToEdit] =
    useState<IFeeder | null>(null);
  const detailsModalRef = useRef<Modalize>(null);
  const { user } = useAuth();

  const isScreenFocused = useIsFocused();

  const navigation = useNavigation();

  function handleRedirectToSelectLocation() {
    navigation.navigate('SelectLocation');
  }

  function handleTryAgain() {
    getFeeders();
  }

  function handleOpenDetailsModal(feeder: IFeeder) {
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

  function handleNavigateToSelectLocation() {
    navigation.navigate('SelectLocation', {
      feederId: currentFeederToEdit?.id,
    });
  }

  const getFeeders = useCallback(async () => {
    try {
      if (!user?.id) {
        return;
      }

      setPageStatus('loading');

      const response = await FeedersRepository.findAllById(user.id);

      setFeeders(response);
      setPageStatus('success');
    } catch (error) {
      setPageStatus('error');
      errorHandler.reportError(error, getFeeders.name);
    }
  }, [user?.id]);

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
