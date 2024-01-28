import { useMutation, useQueryClient } from '@tanstack/react-query';

import { UserRepository } from '@data';
import { useAuth } from '@domain';
import { MutationOptions, QueryKeys } from '@infrastructure';
import { errorHandler } from '@utils';

import { useUserIsFeederFavorite } from './useUserIsFeederFavorite';

export function useUserToggleFavoriteFeeder(
  feederId: string,
  options?: MutationOptions<string>,
) {
  const { user } = useAuth();
  const { isFavorite } = useUserIsFeederFavorite({ feederId });

  const queryClient = useQueryClient();

  const { mutate: addFavoriteFeeder } = useMutation<void, Error, string>({
    mutationFn: id => UserRepository.addFavoriteFeeder(user?.id, id),
    onSuccess: () => {
      options?.onSuccess?.();
      queryClient.setQueryData(
        [QueryKeys.FindFavoriteFeeder, feederId, user?.id],
        feederId,
      );
    },
    onError: error => {
      options?.onError?.(error.message);
      errorHandler.reportError(error, addFavoriteFeeder.name);
    },
  });

  const { mutate: removeFavoriteFeeder } = useMutation<void, Error, string>({
    mutationFn: id => UserRepository.removeFavoriteFeeder(user?.id, id),
    onSuccess: () => {
      options?.onSuccess?.();
      queryClient.setQueryData(
        [QueryKeys.FindFavoriteFeeder, feederId, user?.id],
        '',
      );
    },
    onError: error => {
      options?.onError?.(error.message);
      errorHandler.reportError(error, removeFavoriteFeeder.name);
    },
  });

  function toggleFavoriteFeeder(id: string) {
    if (isFavorite) {
      return removeFavoriteFeeder(id);
    }

    addFavoriteFeeder(id);
  }

  return { toggleFavoriteFeeder };
}
