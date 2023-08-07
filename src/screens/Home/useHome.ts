import { useEffect, useState } from 'react';
import { FeedersRepository } from '@src/services/database/repositories/FeedersRepository';
import { IFeeder } from '@src/types';

export function useHome() {
  const [isLoadingMap, setIsLoadingMap] = useState(true);
  const [feeders, setFeeders] = useState<IFeeder[]>([]);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [currentFeederOpened, setCurrentFeederOpened] =
    useState<IFeeder | null>(null);

  function onMapLoaded() {
    setIsLoadingMap(false);
  }

  function handleOpenTooltip(feeder: IFeeder) {
    setIsTooltipVisible(true);
    setCurrentFeederOpened(feeder);
  }

  function onFeedersChange(feedersToUpdate: IFeeder[]) {
    setFeeders(feedersToUpdate);
  }

  useEffect(() => {
    const subscriber = FeedersRepository.watchFeeders(onFeedersChange);

    return () => subscriber();
  }, []);

  return {
    isLoadingMap,
    onMapLoaded,
    feeders,
    isTooltipVisible,
    setIsTooltipVisible,
    currentFeederOpened,
    handleOpenTooltip,
  };
}
