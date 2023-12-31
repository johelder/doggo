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

import { LATITUDE_DELTA, LONGITUDE_DELTA } from '@components';
import { AddressDomain } from '@data';
import { Location } from '@domain';
import { errorHandler } from '@utils';

import { LOCATION_PERMISSION_DENIED, IS_LOCATION_TURN_OFF } from './constants';
import { MapContextProps } from './types';

const MapContext = createContext<MapContextProps>({} as MapContextProps);

function MapProvider({ children }: React.PropsWithChildren) {
  const [currentUserLocation, setCurrentUserLocation] = useState<Location>({
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

  function formatAddressLabel(type: keyof AddressDomain, label?: string) {
    const labelSwitch: AddressDomain = {
      houseNumber: 'Sem número',
      street: 'Rua sem nome',
      neighborhood: 'Bairro desconhecido',
      city: 'Cidade desconhecida',
    };

    if (!label || label === 'Unnamed Road') {
      return labelSwitch[type] ?? '';
    }

    return label;
  }

  const getAddressByCoordinate = useCallback(async (location: Location) => {
    const address = await mapRef.current?.addressForCoordinate(location);

    const formattedAddress: AddressDomain = {
      street: formatAddressLabel('street', address?.thoroughfare),
      houseNumber: formatAddressLabel('houseNumber', address?.name),
      neighborhood: formatAddressLabel('neighborhood', address?.subLocality),
      city: formatAddressLabel('city', address?.subAdministrativeArea),
    };

    return {
      address: formattedAddress,
      region: {
        ...location,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    };
  }, []);

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
        getAddressByCoordinate,
      }}>
      {children}
    </MapContext.Provider>
  );
}

function useMap() {
  return useContext(MapContext);
}

export { MapProvider, useMap };
