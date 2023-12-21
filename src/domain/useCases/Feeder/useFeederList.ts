import { useQuery, useQueryClient } from '@tanstack/react-query';

import { FeederRepository } from '@data';
import { QueryKeys } from '@infrastructure';

export function useFeederList(userId: string) {
  const queryClient = useQueryClient();

  const { data, isError, isLoading } = useQuery({
    queryKey: [QueryKeys.FeederList, userId],
    queryFn: () => FeederRepository.findAllByUserId(userId),
    retry: false,
  });

  function refresh() {
    queryClient.invalidateQueries({ queryKey: [QueryKeys.FeederList] });
  }

  return {
    feederList: data,
    isLoading,
    isError,
    refresh,
  };
}
