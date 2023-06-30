import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';
import Geolocation from '@react-native-community/geolocation';
import MapView from 'react-native-maps';
import type {
  IMapContextProps,
  IMapProviderProps,
  TCurrentUSerLocation,
} from './types';

const MapContext = createContext<IMapContextProps>({} as IMapContextProps);

function MapProvider({ children }: IMapProviderProps) {
  const [currentUserLocation, setCurrentUserLocation] =
    useState<TCurrentUSerLocation>(null);
  const mapRef = useRef<MapView>(null);

  const getUserCurrentPosition = useCallback(() => {
    Geolocation.getCurrentPosition(
      location => {
        setCurrentUserLocation(location);
      },
      () => {
        console.log('error');
      },
      {
        enableHighAccuracy: true,
      },
    );
  }, []);

  const watchUserPosition = useCallback(() => {
    Geolocation.watchPosition(
      location => {
        setCurrentUserLocation(location);

        mapRef.current?.animateCamera({
          center: location.coords,
        });
      },
      () => {
        console.log('error');
      },
      {
        enableHighAccuracy: true,
        timeout: 1000,
      },
    );
  }, []);

  return (
    <MapContext.Provider
      value={{
        mapRef,
        currentUserLocation,
        getUserCurrentPosition,
        watchUserPosition,
        setCurrentUserLocation,
      }}>
      {children}
    </MapContext.Provider>
  );
}

function useMap() {
  return useContext(MapContext);
}

export { MapProvider, useMap };
