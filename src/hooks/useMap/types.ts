import type { Dispatch, ReactNode, RefObject, SetStateAction } from 'react';
import type MapView from 'react-native-maps';
import type { GeolocationResponse } from '@react-native-community/geolocation';
import type { TCoordinates } from '@src/types';

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
  coords: TCoordinates;
}

export type TCurrentUSerLocation = GeolocationResponse | IUserLocation | null;
