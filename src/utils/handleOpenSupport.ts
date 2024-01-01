import { Linking } from 'react-native';

import { SUPPORT_EMAIL } from '@env';

export function handleOpenSupport() {
  Linking.openURL(`mailto:${SUPPORT_EMAIL}`);
}
