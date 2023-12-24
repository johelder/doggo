import { useMutation, useQueryClient } from '@tanstack/react-query';

import { FeederDomain, FeederRepository } from '@data';
import { MutationOptions, QueryKeys } from '@infrastructure';
import { errorHandler } from '@utils';

export function useFeederUpdate(options?: MutationOptions<FeederDomain>) {
  const queryClient = useQueryClient();

  const { mutate, isError, isPending } = useMutation<
    void,
    unknown,
    FeederDomain
  >({
    mutationFn: feeder => FeederRepository.update(feeder),
    onSuccess: () => options?.onSuccess?.(),
    onError: error => {
      options?.onError?.();
      errorHandler.reportError(error, useFeederUpdate.name);
    },
  });

  function updateFeeder(feeder: FeederDomain) {
    mutate(feeder);
    queryClient.invalidateQueries({ queryKey: [QueryKeys.FeederList] });
  }

  return { updateFeeder, isError, isPending };
}
