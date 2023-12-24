import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import { FeederRepository } from '@data';
import { QueryKeys } from '@infrastructure';
import { errorHandler } from '@utils';

export function useFeederList(userId: string) {
  const { data, isLoading, isRefetching, refetch, isError, error } = useQuery({
    queryKey: [QueryKeys.FeederList, userId],
    queryFn: () => FeederRepository.findAllByUserId(userId),
    retry: false,
  });

  useEffect(() => {
    if (isError) {
      errorHandler.reportError(error, useFeederList.name);
    }
  }, [error, isError]);

  return {
    feederList: data,
    isLoading,
    isRefetching,
    isError,
    refetch,
  };
}
