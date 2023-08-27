import Geolocation, {
  GeolocationError,
} from '@react-native-community/geolocation';
import { useNavigation } from '@react-navigation/native';
import { useModalize } from 'react-native-modalize';

import { errorHandler } from '@utils';
import { useStorage } from '@hooks';
import { IS_FIRST_ACCESS_KEY } from '@app/src/hooks/useStorage/constants';
import {
  LOCATION_PERMISSION_DENIED,
  IS_LOCATION_TURN_OFF,
} from '@app/src/hooks/useMap/constants';

export function useLocationPermission() {
  const navigation = useNavigation();
  const { ref: requestPermissionModalRef, open: openRequestPermissionModal } =
    useModalize();
  const { setValueInStorage } = useStorage(IS_FIRST_ACCESS_KEY, true);

  function redirectUserToWelcome() {
    setValueInStorage(false);
    navigation.navigate('Welcome');
  }

  function handleRequestAuthorizationError(error: GeolocationError) {
    if (
      error.code === LOCATION_PERMISSION_DENIED ||
      error.code === IS_LOCATION_TURN_OFF
    ) {
      openRequestPermissionModal();

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

  return { handlerRequestUserLocation, requestPermissionModalRef };
}
