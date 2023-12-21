import { useQuery } from '@tanstack/react-query';

import { FeederRepository } from '@data';
import { QueryKeys } from '@infrastructure';

type Params = {
  id: string;
  enabled?: boolean;
};

export function useFeederFindOne({ id, enabled = true }: Params) {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: [QueryKeys.FeederFindOne, id],
    queryFn: () => FeederRepository.findById(id),
    retry: false,
    enabled,
  });

  return {
    feeder: data,
    isLoading,
    isSuccess,
    isError,
  };
}
