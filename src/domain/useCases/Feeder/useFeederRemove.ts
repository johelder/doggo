import { useMutation, useQueryClient } from '@tanstack/react-query';

import { FeederRepository } from '@data';
import { MutationOptions, QueryKeys } from '@infrastructure';
import { errorHandler } from '@utils';

export function useFeederRemove(options?: MutationOptions<string>) {
  const queryClient = useQueryClient();

  const { mutate, isError, isPending } = useMutation<void, Error, string>({
    mutationFn: id => FeederRepository.remove(id),
    onSuccess: () => {
      options?.onSuccess?.();
      queryClient.invalidateQueries({ queryKey: [QueryKeys.FeederList] });
    },
    onError: error => {
      options?.onError?.(error.message);
      errorHandler.reportError(error, useFeederRemove.name);
    },
  });

  function removeFeeder(id: string) {
    mutate(id);
  }

  return { removeFeeder, isError, isPending };
}
