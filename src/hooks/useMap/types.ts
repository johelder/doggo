import { ReactNode, RefObject } from 'react';
import MapView from 'react-native-maps';
import { GeolocationResponse } from '@react-native-community/geolocation';

export interface IMapContextProps {
  mapRef: RefObject<MapView>;
  currentUserLocation: GeolocationResponse | null;
  getUserCurrentPosition: () => void;
  watchUserPosition: () => void;
}

export interface IMapProviderProps {
  children: ReactNode;
}
