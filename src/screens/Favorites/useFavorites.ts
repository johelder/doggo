import { useCallback, useEffect, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import { useAuth } from '@src/hooks';
import { UsersRepository } from '@src/services/database/repositories/UsersRepository';

import type { TPageStatus } from '@src/types/common';
import type { IDomainFeeder } from '@src/types/domain';
import { errorHandler } from '@src/utils';
import { TNavigationProps } from '@src/routes/authenticated/types';

export function useFavorites() {
  const [feeders, setFeeders] = useState<IDomainFeeder[]>([]);
  const [pageStatus, setPageStatus] = useState<TPageStatus>('idle');
  const { user } = useAuth();
  const isScreenFocused = useIsFocused();
  const navigation = useNavigation<TNavigationProps<'Favorites'>>();

  function handleRedirectToMap() {
    navigation.navigate('Map');
  }

  function handleTryAgain() {
    getFavoritesFeeders();
  }

  const getFavoritesFeeders = useCallback(async () => {
    try {
      if (!user?.id) {
        return;
      }

      setPageStatus('loading');

      const response = await UsersRepository.findAllFavoritesFeederByUserId(
        user.id,
      );

      setFeeders(response);
      setPageStatus('success');
    } catch (error) {
      setPageStatus('error');
      errorHandler.reportError(error, getFavoritesFeeders.name);
    }
  }, [user?.id]);

  useEffect(() => {
    if (isScreenFocused) {
      getFavoritesFeeders();
    }
  }, [getFavoritesFeeders, isScreenFocused]);

  return { feeders, pageStatus, handleTryAgain, handleRedirectToMap };
}
