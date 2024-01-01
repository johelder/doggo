import { useMemo } from 'react';

import { useNavigation } from '@react-navigation/native';

import { FeederDomain } from '@data';
import { useMap } from '@domain';
import { getFormattedDistanceBetweenTwoPoints } from '@utils';

export function useFeederCard(feeder: FeederDomain, onClose?: () => void) {
  const { currentUserLocation } = useMap();

  const navigation = useNavigation();

  function handleNavigateToFeederDetails() {
    onClose?.();

    navigation.navigate('FeederDetails', {
      feederId: feeder.id,
      feederOwner: feeder.user.name,
    });
  }

  const estimatedDistanceUntilTheFeeder = useMemo(() => {
    return getFormattedDistanceBetweenTwoPoints(
      currentUserLocation,
      feeder.coordinates,
    );
  }, [currentUserLocation, feeder.coordinates]);

  return {
    estimatedDistanceUntilTheFeeder,
    handleNavigateToFeederDetails,
  };
}
