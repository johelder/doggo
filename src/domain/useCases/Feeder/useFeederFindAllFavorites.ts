import { useQuery } from '@tanstack/react-query';

import { FeederRepository } from '@data';
import { useAuth } from '@hooks';
import { QueryKeys } from '@infrastructure';

export function useFeederFindAllFavorites() {
  const { user } = useAuth();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [QueryKeys.FindAllFavorites, user?.id],
    queryFn: () => FeederRepository.findAllFavoritesByUserId(user?.id),
    refetchOnWindowFocus: true,
  });

  return { feeders: data, isLoading, isError, refetch };
}
