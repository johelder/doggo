import { useCallback, useEffect, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import { errorHandler } from '@src/utils';
import { FeedersRepository } from '@src/services/database/repositories/FeedersRepository';

import type { IDomainFeeder } from '@src/types/domain';
import type { TPageStatus } from '@src/types/common';
import type { TNavigationProps } from '@src/routes/authenticated/types';

export function useMyFeeders() {
  const [feeders, setFeeders] = useState<IDomainFeeder[]>([]);
  const [pageStatus, setPageStatus] = useState<TPageStatus>('idle');

  const isScreenFocused = useIsFocused();

  const navigation = useNavigation<TNavigationProps<'MyFeeders'>>();

  function handleRedirectToSelectLocation() {
    navigation.navigate('SelectLocation');
  }

  function handleTryAgain() {
    getFeeders();
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
  };
}
