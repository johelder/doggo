import { useMemo } from 'react';
import { Linking, Platform } from 'react-native';
import { calculateDistanceBetweenTwoPoints } from '@src/utils';
import { useMap } from '@src/hooks';

import type { IDomainFeeder } from '@src/types/domain';

export function useCustomCallout(feeder: IDomainFeeder | null) {
  const { currentUserLocation } = useMap();

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

  return { handleOpenDirections, estimatedDistanceUntilTheFeeder };
}
