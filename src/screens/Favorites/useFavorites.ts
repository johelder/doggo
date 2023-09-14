import { useCallback, useEffect, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import { useAuth } from '@hooks';
import { UsersRepository } from '@services';
import { errorHandler } from '@utils';

import type { TPageStatus, IFeeder } from '@types';

export function useFavorites() {
  const [feeders, setFeeders] = useState<IFeeder[]>([]);
  const [pageStatus, setPageStatus] = useState<TPageStatus>('idle');
  const { user } = useAuth();
  const isScreenFocused = useIsFocused();
  const navigation = useNavigation();

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
