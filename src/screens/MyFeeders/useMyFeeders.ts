import { useCallback, useEffect, useState } from 'react';
import { IDomainFeeder } from '@src/types/domain';
import { TPageStatus } from '@src/types/common';
import { errorHandler } from '@src/utils';
import { FeedersRepository } from '@src/services/database/repositories/FeedersRepository';

export function useMyFeeders() {
  const [feeders, setFeeders] = useState<IDomainFeeder[]>([]);
  const [pageStatus, setPageStatus] = useState<TPageStatus>('idle');

  const getFeeders = useCallback(async () => {
    try {
      setPageStatus('loading');

      const response = await FeedersRepository.findAll();

      setFeeders(response);
      setPageStatus('success');
    } catch (error) {
      setPageStatus('error');
      errorHandler.reportError(error, 'getFeeders');
    }
  }, []);

  useEffect(() => {
    getFeeders();
  }, [getFeeders]);

  return { feeders, pageStatus };
}
