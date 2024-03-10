import { useMutation } from '@tanstack/react-query';

import { FeederDomain, FeederRepository } from '@data';
import { MutationOptions } from '@infrastructure';
import { errorHandler } from '@utils';

export function useFeederCreate(
  options?: MutationOptions<Omit<FeederDomain, 'id'>>,
) {
  const { mutate, isError, isPending } = useMutation<
    void,
    Error,
    Omit<FeederDomain, 'id'>
  >({
    mutationFn: feeder => FeederRepository.create(feeder),
    onSuccess: () => options?.onSuccess?.(),
    onError: error => {
      options?.onError?.(error.message);
      errorHandler.reportError(error, useFeederCreate.name);
    },
  });

  function createFeeder(feeder: Omit<FeederDomain, 'id'>) {
    mutate(feeder);
  }

  return { createFeeder, isPending, isError };
}
