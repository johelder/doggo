import { Alert } from 'react-native';

import auth from '@react-native-firebase/auth';

import { useFeederDeleteAll, useUserRemove, useAuth } from '@domain';
import { errorHandler, showToast } from '@utils';

export function useDeleteAccount() {
  const { user } = useAuth();
  const { deleteAllFeeders } = useFeederDeleteAll();
  const { removeUser } = useUserRemove();

  async function handleDeleteAccount() {
    try {
      if (!user) {
        return;
      }

      deleteAllFeeders(user.id);
      removeUser(user.id);
      await auth().currentUser?.delete();

      showToast({
        type: 'success',
        message: 'Conta excluída com sucesso.',
        duration: 4000,
      });
    } catch (error) {
      showToast({
        type: 'error',
        message:
          'Ocorreu um erro ao excluir sua conta, por favor, contate o suporte.',
        duration: 4000,
      });

      errorHandler.reportError(error, handleDeleteAccount.name);
    }
  }

  function handleConfirmDelete() {
    Alert.alert(
      'Confirmar exclusão',
      'Você tem certeza que deseja excluir sua conta?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Excluir', onPress: handleDeleteAccount },
      ],
    );
  }

  return { handleConfirmDelete };
}
