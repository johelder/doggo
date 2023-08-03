import { useCallback, useEffect, useMemo, useState } from 'react';
import { Linking, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  calculateDistanceBetweenTwoPoints,
  errorHandler,
  showToast,
  formatRelativeDate,
  getDaysDifference,
} from '@src/utils';
import { useAuth, useMap } from '@src/hooks';
import { UsersRepository } from '@src/services/database/repositories/UsersRepository';

import type { IDomainFeeder } from '@src/types/domain';
import type { TNavigationProps } from '@src/routes/authenticated/types';
import type { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export function useFeederCard(
  feeder: IDomainFeeder | null,
  onClose?: () => void,
) {
  const { currentUserLocation } = useMap();
  const { user } = useAuth();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoadingFavorite, setIsLoadingFavorite] = useState(true);

  const navigation = useNavigation<TNavigationProps<'Map'>>();

  const lastSupplyDate = feeder?.maintenanceStatus.supply
    .updatedAt as FirebaseFirestoreTypes.Timestamp;
  const lastCleaningDate = feeder?.maintenanceStatus.cleaning
    .updatedAt as FirebaseFirestoreTypes.Timestamp;

  function handleNavigateToMaintenance(feederId?: string) {
    if (!feederId) {
      return;
    }

    if (onClose) {
      onClose();
    }

    navigation.navigate('Maintenance', { feederId });
  }

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

  function getUpdaterUser(firstUser?: string, secondUser?: string) {
    if (firstUser === secondUser) {
      return firstUser;
    }

    if (firstUser && secondUser) {
      return `${firstUser} e ${secondUser}`;
    }

    return firstUser ?? secondUser;
  }

  const isNeedMaintenance = useCallback(() => {
    const supplyUpdate = getDaysDifference(lastSupplyDate.toDate());
    const cleaningDate = getDaysDifference(lastCleaningDate.toDate());

    return supplyUpdate < -1 || cleaningDate < -15;
  }, [lastCleaningDate, lastSupplyDate]);

  const lastUpdate = useMemo(() => {
    return {
      supply: formatRelativeDate(lastSupplyDate.toDate()),
      cleaning: formatRelativeDate(lastCleaningDate.toDate()),
      users: getUpdaterUser(
        feeder?.maintenanceStatus.supply.updatedBy.userName,
        feeder?.maintenanceStatus.cleaning.updatedBy.userName,
      ),
    };
  }, [
    feeder?.maintenanceStatus.cleaning.updatedBy.userName,
    feeder?.maintenanceStatus.supply.updatedBy.userName,
    lastSupplyDate,
    lastCleaningDate,
  ]);

  useEffect(() => {
    if (user?.id && feeder?.id) {
      isFeederFavorite(user?.id, feeder.id);
    }
  }, [feeder?.id, user?.id]);

  return {
    handleOpenDirections,
    estimatedDistanceUntilTheFeeder,
    toggleFavoriteFeeder,
    isFavorite,
    isLoadingFavorite,
    handleNavigateToMaintenance,
    lastUpdate,
    isNeedMaintenance,
  };
}
