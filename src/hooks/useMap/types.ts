import { Dispatch, RefObject, SetStateAction } from 'react';

import MapView from 'react-native-maps';
import { Modalize } from 'react-native-modalize';

import { GeographicalInformation, Location } from '@domain';
import { UserLocation } from '@types';

export interface MapContextProps {
  mapRef: RefObject<MapView>;
  currentUserLocation: UserLocation;
  getUserCurrentPosition: () => void;
  watchUserPosition: () => number;
  setCurrentUserLocation: Dispatch<SetStateAction<UserLocation>>;
  requestLocationPermissionModalRef: RefObject<Modalize>;
  isLocationAvailable: boolean;
  getAddressByCoordinate: (
    location: Location,
  ) => Promise<GeographicalInformation>;
}
