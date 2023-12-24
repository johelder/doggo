import { useMutation } from '@tanstack/react-query';

import { UserRepository } from '@data';
import { MutationOptions } from '@infrastructure';

export function useUserRemove(options?: MutationOptions<string>) {
  const { mutate, isPending, isError } = useMutation<void, unknown, string>({
    mutationFn: id => UserRepository.remove(id),
    onSuccess: () => options?.onSuccess?.(),
    onError: () => options?.onError?.(),
  });

  function removeUser(id: string) {
    mutate(id);
  }

  return { removeUser, isPending, isError };
}
