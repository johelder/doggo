import { useEffect, useState } from 'react';

import { FeederDomain, FeederRepository } from '@data';
import { errorHandler } from '@utils';

export function useFeederFindAll() {
  const [feeders, setFeeders] = useState<FeederDomain[]>([]);

  function findAllFeeders() {
    try {
      const subscriber = FeederRepository.findAll(setFeeders);

      return subscriber;
    } catch (error) {
      errorHandler.reportError(error, useFeederFindAll.name);
    }
  }

  useEffect(() => {
    const subscriber = findAllFeeders();

    return () => subscriber?.();
  }, []);

  return { feeders };
}
