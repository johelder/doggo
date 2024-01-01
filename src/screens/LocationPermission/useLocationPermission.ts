import Geolocation, {
  GeolocationError,
} from '@react-native-community/geolocation';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { useModalize } from 'react-native-modalize';

import { LOCATION_PERMISSION_DENIED, IS_LOCATION_TURN_OFF } from '@domain';
import { IS_FIRST_ACCESS_KEY, useStorage } from '@hooks';
import { errorHandler } from '@utils';

export function useLocationPermission() {
  const navigation = useNavigation();
  const { ref: requestPermissionModalRef, open: openRequestPermissionModal } =
    useModalize();
  const { setValueInStorage } = useStorage(IS_FIRST_ACCESS_KEY, true);

  function redirectUserToHome() {
    setValueInStorage(false);

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'HomeTabs' }],
      }),
    );
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
      redirectUserToHome,
      handleRequestAuthorizationError,
    );
  }

  return { handlerRequestUserLocation, requestPermissionModalRef };
}
