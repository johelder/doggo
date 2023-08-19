import Geolocation, {
  GeolocationError,
} from '@react-native-community/geolocation';
import { useNavigation } from '@react-navigation/native';

import { errorHandler } from '@src/utils';

import type { TNavigationProps } from '@src/routes/authenticated/types';

export function useLocationPermission() {
  const navigation = useNavigation<TNavigationProps<'LocationPermission'>>();

  function redirectUserToWelcome() {
    navigation.navigate('Welcome');
  }

  function handleRequestAuthorizationError(error: GeolocationError) {
    if (error.PERMISSION_DENIED) {
      return;
    }

    errorHandler.reportError(error, handleRequestAuthorizationError.name);
  }

  function handlerRequestUserLocation() {
    Geolocation.requestAuthorization(
      redirectUserToWelcome,
      handleRequestAuthorizationError,
    );
  }

  return { handlerRequestUserLocation };
}
