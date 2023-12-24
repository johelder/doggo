import { UserRepository } from '@app/src/data';
import { useAuth } from '@app/src/hooks';
import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from '@infrastructure';

type Params = {
  feederId: string;
  enabled?: boolean;
};

export function useUserIsFeederFavorite({ feederId, enabled = true }: Params) {
  const { user } = useAuth();

  const { data, isLoading, refetch } = useQuery({
    queryKey: [QueryKeys.FindFavoriteFeeder, feederId, user?.id],
    queryFn: () => UserRepository.findFavoriteFeederById(user?.id, feederId),
    enabled,
  });

  return {
    isFavorite: data,
    isLoading,
    refetch,
  };
}
