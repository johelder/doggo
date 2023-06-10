import { Linking } from 'react-native';
import { SUPPORT_EMAIL } from '@env';

export function useError() {
  function handleOpenSupport() {
    Linking.openURL(`mailto:${SUPPORT_EMAIL}`);
  }

  return { handleOpenSupport };
}
