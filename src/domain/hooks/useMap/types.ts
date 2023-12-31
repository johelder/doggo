import { Dispatch, RefObject, SetStateAction } from 'react';

import MapView from 'react-native-maps';
import { Modalize } from 'react-native-modalize';

import { GeographicalInformation, Location } from '@domain';

export interface MapContextProps {
  mapRef: RefObject<MapView>;
  currentUserLocation: Location;
  getUserCurrentPosition: () => void;
  watchUserPosition: () => number;
  setCurrentUserLocation: Dispatch<SetStateAction<Location>>;
  requestLocationPermissionModalRef: RefObject<Modalize>;
  isLocationAvailable: boolean;
  getAddressByCoordinate: (
    location: Location,
  ) => Promise<GeographicalInformation>;
}
