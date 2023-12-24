import { useQuery } from '@tanstack/react-query';

import { UserRepository } from '@data';
import { QueryKeys } from '@infrastructure';

export function useUserFindOne(id: string) {
  const { data, isSuccess } = useQuery({
    queryKey: [QueryKeys, id],
    queryFn: () => UserRepository.findById(id),
    retry: false,
  });

  return { user: data, isSuccess };
}
