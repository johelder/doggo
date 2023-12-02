import { Dispatch, ReactNode, RefObject, SetStateAction } from 'react';

import { GeolocationResponse } from '@react-native-community/geolocation';
import MapView from 'react-native-maps';
import { Modalize } from 'react-native-modalize';

import { TCoordinates } from '@types';

export interface IMapContextProps {
  mapRef: RefObject<MapView>;
  currentUserLocation: TCurrentUSerLocation;
  getUserCurrentPosition: () => void;
  watchUserPosition: () => number;
  setCurrentUserLocation: Dispatch<SetStateAction<TCurrentUSerLocation>>;
  requestLocationPermissionModalRef: RefObject<Modalize>;
  isLocationAvailable: boolean;
}

export interface IMapProviderProps {
  children: ReactNode;
}

export interface IUserLocation {
  coords: TCoordinates;
}

export type TCurrentUSerLocation = GeolocationResponse | IUserLocation | null;
