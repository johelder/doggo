import { useMutation } from '@tanstack/react-query';

import { UserRepository } from '@data';
import { MutationOptions } from '@infrastructure';
import { errorHandler } from '@utils';

export function useUserRemove(options?: MutationOptions<string>) {
  const { mutate, isPending, isError } = useMutation<void, unknown, string>({
    mutationFn: id => UserRepository.remove(id),
    onSuccess: () => options?.onSuccess?.(),
    onError: error => {
      options?.onError?.();
      errorHandler.reportError(error, useUserRemove.name);
    },
  });

  function removeUser(id: string) {
    mutate(id);
  }

  return { removeUser, isPending, isError };
}
