import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import { FeederRepository } from '@data';
import { QueryKeys } from '@infrastructure';
import { errorHandler } from '@utils';

type Params = {
  id: string;
  enabled?: boolean;
};

export function useFeederFindOne({ id, enabled = true }: Params) {
  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryKey: [QueryKeys.FeederFindOne, id],
    queryFn: () => FeederRepository.findById(id),
    retry: false,
    enabled,
  });

  useEffect(() => {
    if (isError) {
      errorHandler.reportError(error, useFeederFindOne.name);
    }
  }, [error, isError]);

  return {
    feeder: data,
    isLoading,
    isSuccess,
    isError,
  };
}
