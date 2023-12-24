import { UserRepository } from '@app/src/data';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useAuth } from '@hooks';
import { MutationOptions, QueryKeys } from '@infrastructure';

import { useUserIsFeederFavorite } from './useUserIsFeederFavorite';

export function useUserToggleFavoriteFeeder(
  feederId: string,
  options?: MutationOptions<string>,
) {
  const { user } = useAuth();
  const { isFavorite } = useUserIsFeederFavorite({ feederId });

  const queryClient = useQueryClient();

  const { mutate: addFavoriteFeeder } = useMutation<void, unknown, string>({
    mutationFn: id => UserRepository.addFavoriteFeeder(user?.id, id),
    onSuccess: () => {
      options?.onSuccess?.();
      queryClient.setQueryData(
        [QueryKeys.FindFavoriteFeeder, feederId, user?.id],
        feederId,
      );
    },
    onError: () => options?.onError?.(),
  });

  const { mutate: removeFavoriteFeeder } = useMutation<void, unknown, string>({
    mutationFn: id => UserRepository.removeFavoriteFeeder(user?.id, id),
    onSuccess: () => {
      options?.onSuccess?.();
      queryClient.setQueryData(
        [QueryKeys.FindFavoriteFeeder, feederId, user?.id],
        '',
      );
    },
    onError: () => options?.onError?.(),
  });

  function toggleFavoriteFeeder(id: string) {
    if (isFavorite) {
      return removeFavoriteFeeder(id);
    }

    addFavoriteFeeder(id);
  }

  return { toggleFavoriteFeeder };
}
