import { useMemo } from 'react';
import { Linking, Platform } from 'react-native';

import { FeederDomain } from '@data';
import { useMap } from '@domain';
import { getFormattedDistanceBetweenTwoLocations } from '@utils';

export function useFeederLocationSection(feeder: FeederDomain) {
  const { currentUserLocation } = useMap();

  const estimatedDistanceUntilTheFeeder = useMemo(() => {
    return getFormattedDistanceBetweenTwoLocations(
      currentUserLocation,
      feeder.coordinates,
    );
  }, [currentUserLocation, feeder.coordinates]);

  function handleOpenDirections() {
    const { latitude, longitude } = feeder.coordinates;

    const iosURL = `googleMaps://app?saddr=${latitude}&daddr=${longitude}`;
    const androidURL = `google.navigation:q=${latitude}+${longitude}`;

    Linking.openURL(Platform.OS === 'ios' ? iosURL : androidURL);
  }

  return { handleOpenDirections, estimatedDistanceUntilTheFeeder };
}
