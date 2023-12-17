import { useQuery, useQueryClient } from '@tanstack/react-query';

import { FeederRepository } from '@data';
import { QueryKeys } from '@infrastructure';

export function useFeederList(userId: string) {
  const queryClient = useQueryClient();

  const { data, isFetching, isError } = useQuery({
    queryKey: [QueryKeys.FeederList, userId],
    queryFn: async () => FeederRepository.findAllByUserId(userId),
  });

  function refresh() {
    queryClient.invalidateQueries({ queryKey: [QueryKeys.FeederList] });
  }

  return {
    feederList: data,
    isFetching,
    isError,
    refresh,
  };
}
