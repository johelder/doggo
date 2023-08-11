import { useCallback, useEffect, useState } from 'react';

import { FeedersRepository } from '@src/services/database/repositories/FeedersRepository';
import { useMap } from '@src/hooks';
import { calculateDistanceBetweenTwoPoints } from '@src/utils';

import { THREE_KILOMETER_IN_METERS } from './constants';
import type { IFeeder, TCoordinates } from '@src/types';

export function useHome() {
  const [isLoadingMap, setIsLoadingMap] = useState(true);
  const [feeders, setFeeders] = useState<IFeeder[]>([]);
  const [nearFeeders, setNearFeeders] = useState<IFeeder[]>([]);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [currentFeederOpened, setCurrentFeederOpened] =
    useState<IFeeder | null>(null);
  const { currentUserLocation, mapRef } = useMap();

  function onMapLoaded() {
    setIsLoadingMap(false);
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

  return {
    isLoadingMap,
    onMapLoaded,
    feeders,
    nearFeeders,
    isTooltipVisible,
    setIsTooltipVisible,
    currentFeederOpened,
    handleOpenTooltip,
    handleClickOnNearFeeder,
  };
}
