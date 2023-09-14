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

import { errorHandler } from '@utils';

import { LOCATION_PERMISSION_DENIED, IS_LOCATION_TURN_OFF } from './constants';

import type {
  IMapContextProps,
  IMapProviderProps,
  TCurrentUSerLocation,
} from './types';

const MapContext = createContext<IMapContextProps>({} as IMapContextProps);

function MapProvider({ children }: IMapProviderProps) {
  const [currentUserLocation, setCurrentUserLocation] =
    useState<TCurrentUSerLocation>(null);
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
      location => {
        setIsLocationAvailable(true);
        setCurrentUserLocation(location);
      },
      handleLocationError,
      {
        enableHighAccuracy: true,
      },
    );
  }, [handleLocationError]);

  const watchUserPosition = useCallback(() => {
    const watchId = Geolocation.watchPosition(
      location => {
        setCurrentUserLocation(location);

        mapRef.current?.animateCamera({
          center: location.coords,
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
