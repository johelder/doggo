import { useEffect, useMemo, useState } from 'react';
import { Linking, Platform } from 'react-native';
import {
  calculateDistanceBetweenTwoPoints,
  errorHandler,
  showToast,
} from '@src/utils';
import { useAuth, useMap } from '@src/hooks';
import { UsersRepository } from '@src/services/database/repositories/UsersRepository';

import type { IDomainFeeder } from '@src/types/domain';

export function useFeederCard(feeder: IDomainFeeder | null) {
  const { currentUserLocation } = useMap();
  const { user } = useAuth();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoadingFavorite, setIsLoadingFavorite] = useState(true);

  async function toggleFavoriteFeeder() {
    try {
      if (!user?.id || !feeder?.id) {
        return;
      }

      if (await isFeederFavorite(user.id, feeder.id)) {
        await UsersRepository.removeFavoriteFeeder(user.id, feeder);
        setIsFavorite(false);

        return;
      }

      setIsFavorite(true);
      await UsersRepository.addNewFavoriteFeeder(user.id, feeder);
    } catch (error) {
      showToast({
        type: 'error',
        message: 'Ocorreu um erro no servidor, tente novamente mais tarde.',
        duration: 4000,
      });

      errorHandler.reportError(error, toggleFavoriteFeeder.name);
    }
  }

  async function isFeederFavorite(userId: string, feederId: string) {
    setIsLoadingFavorite(true);

    const favoriteFeeder = await UsersRepository.findFavoriteFeederById(
      userId,
      feederId,
    );

    setIsFavorite(!!favoriteFeeder);
    setIsLoadingFavorite(false);

    return favoriteFeeder;
  }

  function handleOpenDirections() {
    if (!feeder?.coordinates) {
      return;
    }

    const { latitude, longitude } = feeder.coordinates;

    const iosURL = `googleMaps://app?saddr=${latitude}&daddr=${longitude}`;
    const androidURL = `google.navigation:q=${latitude}+${longitude}`;

    Linking.openURL(Platform.OS === 'ios' ? iosURL : androidURL);
  }

  const estimatedDistanceUntilTheFeeder = useMemo(() => {
    if (!currentUserLocation?.coords || !feeder?.coordinates) {
      return 0;
    }

    return calculateDistanceBetweenTwoPoints(
      currentUserLocation.coords,
      feeder.coordinates,
    );
  }, [currentUserLocation?.coords, feeder?.coordinates]);

  useEffect(() => {
    if (user?.id && feeder) {
      isFeederFavorite(user?.id, feeder.id);
    }
  }, [feeder, user?.id]);

  return {
    handleOpenDirections,
    estimatedDistanceUntilTheFeeder,
    toggleFavoriteFeeder,
    isFavorite,
    isLoadingFavorite,
  };
}
