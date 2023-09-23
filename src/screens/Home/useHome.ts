import { useCallback, useEffect, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';

import { FeedersRepository } from '@services';
import { useMap } from '@hooks';
import { calculateDistanceBetweenTwoPoints, delay } from '@utils';

import { THREE_KILOMETER_IN_METERS } from './constants';

import type { IFeeder, TCoordinates } from '@types';

export function useHome() {
  const [isLoadingMap, setIsLoadingMap] = useState(true);
  const [feeders, setFeeders] = useState<IFeeder[]>([]);
  const [nearFeeders, setNearFeeders] = useState<IFeeder[]>([]);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [currentFeederOpened, setCurrentFeederOpened] =
    useState<IFeeder | null>(null);
  const [isNearFeederListExpanded, setIsNearFeederListExpanded] =
    useState(true);
  const {
    currentUserLocation,
    mapRef,
    getUserCurrentPosition,
    watchUserPosition,
    requestLocationPermissionModalRef,
    isLocationAvailable,
  } = useMap();
  const isScreenFocused = useIsFocused();

  const navigation = useNavigation();

  function handleRedirectToSelectLocation() {
    navigation.navigate('SelectLocation');
  }

  function handleToggleNearFeederList() {
    setIsNearFeederListExpanded(prevState => !prevState);
  }

  function handleOpenTooltip(feeder: IFeeder) {
    setIsTooltipVisible(true);
    setCurrentFeederOpened(feeder);
  }

  const sortFeedersByNearDistance = useCallback(
    (feedersToSort: IFeeder[]) => {
      if (!currentUserLocation) {
        return [];
      }

      return feedersToSort.sort((a, b) => {
        const firstFeederDistance = calculateDistanceBetweenTwoPoints(
          currentUserLocation.coords,
          a.coordinates,
        );
        const secondFeederDistance = calculateDistanceBetweenTwoPoints(
          currentUserLocation.coords,
          b.coordinates,
        );

        if (firstFeederDistance < secondFeederDistance) {
          return -1;
        }

        return 1;
      });
    },
    [currentUserLocation],
  );

  const getFeedersInThreeKilometerRadio = useCallback(
    (allFeeders: IFeeder[]) => {
      if (!currentUserLocation) {
        return [];
      }

      return allFeeders.filter(storedFeeder => {
        const distanceBetweenUserAndFeeder = calculateDistanceBetweenTwoPoints(
          currentUserLocation?.coords,
          storedFeeder.coordinates,
        );

        if (distanceBetweenUserAndFeeder < THREE_KILOMETER_IN_METERS) {
          return storedFeeder;
        }
      });
    },
    [currentUserLocation],
  );

  const getNearestFeeders = useCallback(
    (allFeeders: IFeeder[]) => {
      if (!currentUserLocation) {
        return [];
      }

      const nearestFeeders = getFeedersInThreeKilometerRadio(allFeeders);
      const orderedFeeders = sortFeedersByNearDistance(nearestFeeders);

      setNearFeeders(orderedFeeders.slice(0, 10));
    },
    [
      currentUserLocation,
      getFeedersInThreeKilometerRadio,
      sortFeedersByNearDistance,
    ],
  );

  function handleClickOnNearFeeder(coords: TCoordinates) {
    mapRef.current?.animateCamera({
      center: coords,
    });
  }

  const onFeedersChange = useCallback(
    (feedersToUpdate: IFeeder[]) => {
      setFeeders(feedersToUpdate);
      getNearestFeeders(feedersToUpdate);
    },
    [getNearestFeeders],
  );

  useEffect(() => {
    const subscriber = FeedersRepository.watchFeeders(onFeedersChange);

    return () => subscriber();
  }, [onFeedersChange]);

  useEffect(() => {
    if (isScreenFocused) {
      getUserCurrentPosition();
    }

    const watchId = watchUserPosition();

    return () => Geolocation.clearWatch(watchId);
  }, [getUserCurrentPosition, isScreenFocused, watchUserPosition]);

  const initialDelay = useCallback(async () => {
    setIsLoadingMap(true);

    await delay(1000);

    setIsLoadingMap(false);
  }, []);

  useEffect(() => {
    initialDelay();
  }, [initialDelay]);

  return {
    isLoadingMap,
    feeders,
    nearFeeders,
    isTooltipVisible,
    setIsTooltipVisible,
    currentFeederOpened,
    handleOpenTooltip,
    handleClickOnNearFeeder,
    isNearFeederListExpanded,
    handleToggleNearFeederList,
    requestLocationPermissionModalRef,
    isLocationAvailable,
    handleRedirectToSelectLocation,
  };
}
