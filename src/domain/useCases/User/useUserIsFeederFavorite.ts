import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import { UserRepository } from '@data';
import { useAuth } from '@hooks';
import { QueryKeys } from '@infrastructure';
import { errorHandler } from '@utils';

type Params = {
  feederId: string;
  enabled?: boolean;
};

export function useUserIsFeederFavorite({ feederId, enabled = true }: Params) {
  const { user } = useAuth();

  const { data, isLoading, refetch, isError, error } = useQuery({
    queryKey: [QueryKeys.FindFavoriteFeeder, feederId, user?.id],
    queryFn: () => UserRepository.findFavoriteFeederById(user?.id, feederId),
    enabled,
  });

  useEffect(() => {
    if (isError) {
      errorHandler.reportError(error, useUserIsFeederFavorite.name);
    }
  }, [error, isError]);

  return {
    isFavorite: data,
    isLoading,
    refetch,
  };
}
