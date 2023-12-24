import { useMutation } from '@tanstack/react-query';

import { UserDomain, UserRepository } from '@data';

export function useUserCreate() {
  const { mutate } = useMutation<void, unknown, UserDomain>({
    mutationFn: user => UserRepository.create(user),
  });

  function createUser(user: UserDomain) {
    mutate(user);
  }

  return { createUser };
}
