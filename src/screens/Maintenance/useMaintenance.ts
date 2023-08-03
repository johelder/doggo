import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { useAuth } from '@src/hooks';
import { errorHandler, showToast } from '@src/utils';

import type {
  TNavigationProps,
  TRouteProps,
} from '@src/routes/authenticated/types';
import { FeedersRepository } from '@src/services/database/repositories/FeedersRepository';

import type { TMaintenanceStatus } from '@src/types/common';

export function useMaintenance() {
  const [maintenanceStatus, setMaintenanceStatus] = useState<
    TMaintenanceStatus[]
  >([]);
  const { user } = useAuth();
  const route = useRoute<TRouteProps<'Maintenance'>>();
  const navigation = useNavigation<TNavigationProps<'Maintenance'>>();

  function handleToggleMaintenanceStatus(status: TMaintenanceStatus) {
    setMaintenanceStatus(prevStatus => {
      if (prevStatus.includes(status)) {
        return prevStatus.filter(storedStatus => storedStatus !== status);
      }

      return [...prevStatus, status];
    });
  }

  function isStatusAdded(status: TMaintenanceStatus) {
    return maintenanceStatus.includes(status);
  }

  async function handleUpdateFeederMaintenance() {
    try {
      if (!user) {
        return;
      }

      if (maintenanceStatus.length === 0) {
        showToast({
          type: 'warning',
          message: 'Preencha pelo menos um campo parar continuar.',
          duration: 4000,
        });

        return;
      }

      await FeedersRepository.updateMaintenance(
        maintenanceStatus,
        route.params.feederId,
        user,
      );

      navigation.navigate('Map');
    } catch (error) {
      showToast({
        type: 'error',
        message:
          'Ocorreu um erro ao atualizar, por favor, tente novamente mais tarde.',
        duration: 4000,
      });

      errorHandler.reportError(error, handleUpdateFeederMaintenance.name);
    }
  }

  return {
    handleToggleMaintenanceStatus,
    isStatusAdded,
    handleUpdateFeederMaintenance,
  };
}
