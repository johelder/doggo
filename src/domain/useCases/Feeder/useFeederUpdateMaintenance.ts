import { useMutation, useQueryClient } from '@tanstack/react-query';

import { FeederRepository, MaintenanceStatusDomain, UserDomain } from '@data';
import { MutationOptions, QueryKeys } from '@infrastructure';
import { errorHandler } from '@utils';

type Params = {
  status: Array<keyof MaintenanceStatusDomain>;
  feederId: string;
  user: Pick<UserDomain, 'id' | 'name'>;
};

export function useFeederUpdateMaintenance(options?: MutationOptions<Params>) {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError } = useMutation<void, unknown, Params>({
    mutationFn: ({ status, feederId, user }) =>
      FeederRepository.updateMaintenance(status, feederId, user),
    onSuccess: () => {
      options?.onSuccess?.();
      queryClient.invalidateQueries({ queryKey: [QueryKeys.FeederFindOne] });
    },
    onError: error => {
      options?.onError?.();
      errorHandler.reportError(error, useFeederUpdateMaintenance.name);
    },
  });

  function updateMaintenance(params: Params) {
    mutate(params);
  }

  return { updateMaintenance, isPending, isError };
}
