import { useEffect, useState } from 'react';

import { FeederDomain, FeederRepository } from '@data';

export function useFeederFindAll() {
  const [feeders, setFeeders] = useState<FeederDomain[]>([]);

  useEffect(() => {
    const subscriber = FeederRepository.findAll(setFeeders);

    return () => subscriber();
  }, []);

  return { feeders };
}
