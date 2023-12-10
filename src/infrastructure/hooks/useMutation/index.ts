import { useState } from 'react';

import { errorHandler } from '@utils';

import { MutationParams } from './types';

export function useMutation<Params, Data>({
  mutationFn,
  onSuccess,
  onError,
}: MutationParams<Params, Data>) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<Boolean | null>(null);

  async function mutate(params: Params) {
    try {
      setIsLoading(true);
      setIsError(null);

      const data = await mutationFn(params);

      onSuccess?.(data);
    } catch (error) {
      setIsError(true);
      onError?.();
      errorHandler.reportError(error, mutationFn.name);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    mutate,
    isLoading,
    isError,
  };
}
