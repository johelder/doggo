import { useMutation, useQueryClient } from '@tanstack/react-query';

import { FeederRepository } from '@data';
import { MutationOptions, QueryKeys } from '@infrastructure';

export function useFeederRemove(options?: MutationOptions<string>) {
  const queryClient = useQueryClient();

  const { mutate, isError, isPending } = useMutation<void, unknown, string>({
    mutationFn: id => FeederRepository.remove(id),
    onSuccess: () => {
      options?.onSuccess?.();
      queryClient.invalidateQueries({ queryKey: [QueryKeys.FeederList] });
    },
    onError: () => options?.onError?.(),
  });

  function removeFeeder(id: string) {
    mutate(id);
  }

  return { removeFeeder, isError, isPending };
}
