import { useCallback, useEffect, useState } from 'react';

import { useIsFocused, useNavigation } from '@react-navigation/native';

import { FeederDomain } from '@data';
import { useAuth } from '@hooks';
import { UsersRepository } from '@services';
import { TPageStatus } from '@types';
import { errorHandler } from '@utils';

export function useFavorites() {
  const [feeders, setFeeders] = useState<FeederDomain[]>([]);
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
