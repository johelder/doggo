import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import { FeederRepository } from '@data';
import { useAuth } from '@hooks';
import { QueryKeys } from '@infrastructure';
import { errorHandler } from '@utils';

export function useFeederFindAllFavorites() {
  const { user } = useAuth();

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: [QueryKeys.FindAllFavorites, user?.id],
    queryFn: () => FeederRepository.findAllFavoritesByUserId(user?.id),
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    if (isError) {
      errorHandler.reportError(error, useFeederFindAllFavorites.name);
    }
  }, [error, isError]);

  return { feeders: data, isLoading, isError, refetch };
}
