import { useMutation } from '@tanstack/react-query';

import { FeederRepository } from '@data';
import { MutationOptions } from '@infrastructure';
import { errorHandler } from '@utils';

export function useFeederDeleteAll(options?: MutationOptions<string>) {
  const { mutate, isError, isPending } = useMutation<void, unknown, string>({
    mutationFn: userId => FeederRepository.deleteAllByUserId(userId),
    onSuccess: () => options?.onSuccess?.(),
    onError: error => {
      options?.onError?.();
      errorHandler.reportError(error, useFeederDeleteAll.name);
    },
  });

  function deleteAllFeeders(userId: string) {
    mutate(userId);
  }

  return { deleteAllFeeders, isPending, isError };
}
