import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import { UserRepository } from '@data';
import { QueryKeys } from '@infrastructure';
import { errorHandler } from '@utils';

export function useUserFindOne(id: string) {
  const { data, isSuccess, isError, error } = useQuery({
    queryKey: [QueryKeys, id],
    queryFn: () => UserRepository.findById(id),
    retry: false,
  });

  useEffect(() => {
    if (isError) {
      errorHandler.reportError(error, useUserFindOne.name);
    }
  }, [error, isError]);

  return { user: data, isSuccess };
}
