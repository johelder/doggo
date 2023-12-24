import { useMutation } from '@tanstack/react-query';

import { UserDomain, UserRepository } from '@data';
import { errorHandler } from '@utils';

export function useUserCreate() {
  const { mutate } = useMutation<void, unknown, UserDomain>({
    mutationFn: user => UserRepository.create(user),
    onError: error => {
      errorHandler.reportError(error, useUserCreate.name);
    },
  });

  function createUser(user: UserDomain) {
    mutate(user);
  }

  return { createUser };
}
