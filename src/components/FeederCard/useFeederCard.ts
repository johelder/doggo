import { useCallback, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  getDaysDifference,
  getFormattedDistanceBetweenTwoPoints,
} from '@utils';
import { useMap } from '@hooks';

import type { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import type { IFeeder } from '@types';

export function useFeederCard(feeder: IFeeder | null, onClose?: () => void) {
  const { currentUserLocation } = useMap();

  const navigation = useNavigation();

  const lastSupplyDate = feeder?.maintenanceStatus.supply
    .updatedAt as FirebaseFirestoreTypes.Timestamp;
  const lastCleaningDate = feeder?.maintenanceStatus.cleaning
    .updatedAt as FirebaseFirestoreTypes.Timestamp;

  function handleNavigateToFeederDetails() {
    if (!feeder?.id) {
      return;
    }

    if (onClose) {
      onClose();
    }

    navigation.navigate('FeederDetails', { feederId: feeder.id });
  }

  const estimatedDistanceUntilTheFeeder = useMemo(() => {
    if (!currentUserLocation?.coords || !feeder?.coordinates) {
      return 0;
    }

    return getFormattedDistanceBetweenTwoPoints(
      currentUserLocation.coords,
      feeder.coordinates,
    );
  }, [currentUserLocation?.coords, feeder?.coordinates]);

  const isNeedMaintenance = useCallback(() => {
    const supplyUpdate = getDaysDifference(lastSupplyDate?.toDate());
    const cleaningDate = getDaysDifference(lastCleaningDate?.toDate());

    return supplyUpdate < -1 || cleaningDate < -15;
  }, [lastCleaningDate, lastSupplyDate]);

  return {
    estimatedDistanceUntilTheFeeder,
    isNeedMaintenance,
    handleNavigateToFeederDetails,
  };
}
