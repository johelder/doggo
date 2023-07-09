import { useEffect, useState } from 'react';
import { IDomainFeeder } from '@src/types/domain';
import { FeedersRepository } from '@src/services/database/repositories/FeedersRepository';

export function useHome() {
  const [isLoadingMap, setIsLoadingMap] = useState(true);
  const [feeders, setFeeders] = useState<IDomainFeeder[]>([]);

  function onMapLoaded() {
    setIsLoadingMap(false);
  }

  function onFeedersChange(feedersToUpdate: IDomainFeeder[]) {
    setFeeders(feedersToUpdate);
  }

  useEffect(() => {
    const subscriber = FeedersRepository.watchFeeders(onFeedersChange);

    return () => subscriber();
  }, []);

  return { isLoadingMap, onMapLoaded, feeders };
}
