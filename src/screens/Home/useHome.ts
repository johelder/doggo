import { useCallback, useEffect, useState } from 'react';
import { FeedersRepository } from '@src/services/database/repositories/FeedersRepository';
import { IFeeder } from '@src/types';
import { useMap } from '@src/hooks';
import { calculateDistanceBetweenTwoPoints } from '@src/utils';
import { THREE_KILOMETER_IN_METERS } from './constants';

export function useHome() {
  const [isLoadingMap, setIsLoadingMap] = useState(true);
  const [feeders, setFeeders] = useState<IFeeder[]>([]);
  const [nearFeeders, setNearFeeders] = useState<IFeeder[]>([]);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [currentFeederOpened, setCurrentFeederOpened] =
    useState<IFeeder | null>(null);
  const { currentUserLocation } = useMap();

  function onMapLoaded() {
    setIsLoadingMap(false);
  }

  function handleOpenTooltip(feeder: IFeeder) {
    setIsTooltipVisible(true);
    setCurrentFeederOpened(feeder);
  }

  const getNearestFeeders = useCallback(
    (allFeeders: IFeeder[]) => {
      if (!currentUserLocation) {
        return;
      }

      const nearestFeeders = allFeeders.filter(storedFeeder => {
        const distanceBetweenUserAndFeeder = calculateDistanceBetweenTwoPoints(
          currentUserLocation?.coords,
          storedFeeder.coordinates,
        );

        if (distanceBetweenUserAndFeeder < THREE_KILOMETER_IN_METERS) {
          return storedFeeder;
        }
      });

      setNearFeeders(nearestFeeders.slice(0, 10));
    },
    [currentUserLocation],
  );

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
  };
}
