import { FeederDomain, FeederRepository } from '@data';
import { MutationOptions, useMutation } from '@infrastructure';

export function useFeederCreate(
  options?: MutationOptions<Omit<FeederDomain, 'id'>>,
) {
  const { mutate, isLoading, isError } = useMutation<
    Omit<FeederDomain, 'id'>,
    void
  >({
    mutationFn: feeder => FeederRepository.create(feeder),
    onSuccess: () => options?.onSuccess?.(),
    onError: () => options?.onError?.(),
  });

  function createFeeder(feeder: Omit<FeederDomain, 'id'>) {
    mutate(feeder);
  }

  return { createFeeder, isLoading, isError };
}
