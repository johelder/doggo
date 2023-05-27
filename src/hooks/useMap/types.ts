import { Dispatch, ReactNode, RefObject, SetStateAction } from 'react';
import MapView from 'react-native-maps';
import { GeolocationResponse } from '@react-native-community/geolocation';

export interface IMapContextProps {
  mapRef: RefObject<MapView>;
  currentUserLocation: TCurrentUSerLocation;
  getUserCurrentPosition: () => void;
  watchUserPosition: () => void;
  setCurrentUserLocation: Dispatch<SetStateAction<TCurrentUSerLocation>>;
}

export interface IMapProviderProps {
  children: ReactNode;
}

export interface IUserLocation {
  coords: {
    latitude: number;
    longitude: number;
  };
}

export type TCurrentUSerLocation = GeolocationResponse | IUserLocation | null;
