import { Linking } from 'react-native';

export function useRequestLocationPermissionModal() {
  function handleOpenAppLocationSettings() {
    Linking.sendIntent('android.settings.LOCATION_SOURCE_SETTINGS');
  }

  return { handleOpenAppLocationSettings };
}
