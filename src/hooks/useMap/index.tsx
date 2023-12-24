import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';

import Geolocation, {
  GeolocationError,
} from '@react-native-community/geolocation';
import MapView from 'react-native-maps';
import { useModalize } from 'react-native-modalize';

import { UserLocation } from '@types';
import { errorHandler } from '@utils';

import { LOCATION_PERMISSION_DENIED, IS_LOCATION_TURN_OFF } from './constants';
import { MapContextProps } from './types';

const MapContext = createContext<MapContextProps>({} as MapContextProps);

function MapProvider({ children }: React.PropsWithChildren) {
  const [currentUserLocation, setCurrentUserLocation] = useState<UserLocation>({
    latitude: 0,
    longitude: 0,
  });
  const [isLocationAvailable, setIsLocationAvailable] = useState(true);
  const mapRef = useRef<MapView>(null);
  const {
    ref: requestLocationPermissionModalRef,
    open: openRequestLocationPermissionModalRef,
  } = useModalize();

  const handleLocationError = useCallback(
    (error: GeolocationError) => {
      if (
        error.code === LOCATION_PERMISSION_DENIED ||
        error.code === IS_LOCATION_TURN_OFF
      ) {
        openRequestLocationPermissionModalRef();
        setIsLocationAvailable(false);

        return;
      }

      errorHandler.reportError(error, handleLocationError.name);
    },
    [openRequestLocationPermissionModalRef],
  );

  const getUserCurrentPosition = useCallback(() => {
    Geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setIsLocationAvailable(true);
        setCurrentUserLocation({ latitude, longitude });
      },
      handleLocationError,
      {
        enableHighAccuracy: true,
      },
    );
  }, [handleLocationError]);

  const watchUserPosition = useCallback(() => {
    const watchId = Geolocation.watchPosition(
      ({ coords: { latitude, longitude } }) => {
        setCurrentUserLocation({ latitude, longitude });

        mapRef.current?.animateCamera({
          center: {
            latitude,
            longitude,
          },
        });
      },
      handleLocationError,
      {
        enableHighAccuracy: true,
        timeout: 1000,
      },
    );

    return watchId;
  }, [handleLocationError]);

  return (
    <MapContext.Provider
      value={{
        mapRef,
        currentUserLocation,
        getUserCurrentPosition,
        watchUserPosition,
        setCurrentUserLocation,
        requestLocationPermissionModalRef,
        isLocationAvailable,
      }}>
      {children}
    </MapContext.Provider>
  );
}

function useMap() {
  return useContext(MapContext);
}

export { MapProvider, useMap };
