import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { MaintenanceStatusDomain } from '@data';
import { useFeederUpdateMaintenance } from '@domain';
import { useAuth } from '@hooks';
import { showToast } from '@utils';

export function useFeederMaintenanceForm(feederId: string) {
  const [updatedMaintenanceStatus, setUpdatedMaintenanceStatus] = useState<
    Array<keyof MaintenanceStatusDomain>
  >([]);

  const { user } = useAuth();

  const navigation = useNavigation();

  const { updateMaintenance } = useFeederUpdateMaintenance({
    onSuccess: () => {
      showToast({
        type: 'success',
        message: 'Manutenção atualizada com sucesso.',
      });

      navigation.goBack();
    },
    onError: () => {
      showToast({
        type: 'error',
        message:
          'Ocorreu um erro ao atualizar, por favor, tente novamente mais tarde.',
        duration: 4000,
      });
    },
  });

  function handleToggleMaintenanceStatus(
    status: keyof MaintenanceStatusDomain,
  ) {
    setUpdatedMaintenanceStatus(prevState =>
      prevState.includes(status)
        ? prevState.filter(addedStatus => addedStatus !== status)
        : [...prevState, status],
    );
  }

  function isStatusAdded(status: keyof MaintenanceStatusDomain) {
    return updatedMaintenanceStatus.includes(status);
  }

  async function handleUpdateFeederMaintenance() {
    if (!user) {
      return;
    }

    if (updatedMaintenanceStatus.length === 0) {
      showToast({
        type: 'warning',
        message: 'Preencha pelo menos um campo parar continuar.',
        duration: 4000,
      });

      return;
    }

    updateMaintenance({
      status: updatedMaintenanceStatus,
      feederId,
      user,
    });
  }

  return {
    updatedMaintenanceStatus,
    handleToggleMaintenanceStatus,
    isStatusAdded,
    handleUpdateFeederMaintenance,
  };
}
