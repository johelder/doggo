import { useMutation } from '@tanstack/react-query';

import { FeederDomain, FeederRepository } from '@data';
import { MutationOptions } from '@infrastructure';

export function useFeederCreate(
  options?: MutationOptions<Omit<FeederDomain, 'id'>>,
) {
  const { mutate, isError, isPending } = useMutation<
    void,
    unknown,
    Omit<FeederDomain, 'id'>
  >({
    mutationFn: feeder => FeederRepository.create(feeder),
    onSuccess: () => options?.onSuccess?.(),
  });

  function createFeeder(feeder: Omit<FeederDomain, 'id'>) {
    mutate(feeder);
  }

  return { createFeeder, isPending, isError };
}
