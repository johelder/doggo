import { Dispatch, RefObject, SetStateAction } from 'react';

import MapView from 'react-native-maps';
import { Modalize } from 'react-native-modalize';

import { UserLocation } from '@types';

export interface MapContextProps {
  mapRef: RefObject<MapView>;
  currentUserLocation: UserLocation;
  getUserCurrentPosition: () => void;
  watchUserPosition: () => number;
  setCurrentUserLocation: Dispatch<SetStateAction<UserLocation>>;
  requestLocationPermissionModalRef: RefObject<Modalize>;
  isLocationAvailable: boolean;
}
