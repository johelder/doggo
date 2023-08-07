import { useCallback, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  calculateDistanceBetweenTwoPoints,
  getDaysDifference,
} from '@src/utils';
import { useMap } from '@src/hooks';

import type { IDomainFeeder } from '@src/types/domain';
import type { TNavigationProps } from '@src/routes/authenticated/types';
import type { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export function useFeederCard(
  feeder: IDomainFeeder | null,
  onClose?: () => void,
) {
  const { currentUserLocation } = useMap();

  const navigation = useNavigation<TNavigationProps<'Map'>>();

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

    return calculateDistanceBetweenTwoPoints(
      currentUserLocation.coords,
      feeder.coordinates,
    );
  }, [currentUserLocation?.coords, feeder?.coordinates]);

  const isNeedMaintenance = useCallback(() => {
    const supplyUpdate = getDaysDifference(lastSupplyDate.toDate());
    const cleaningDate = getDaysDifference(lastCleaningDate.toDate());

    return supplyUpdate < -1 || cleaningDate < -15;
  }, [lastCleaningDate, lastSupplyDate]);

  return {
    estimatedDistanceUntilTheFeeder,
    isNeedMaintenance,
    handleNavigateToFeederDetails,
  };
}
