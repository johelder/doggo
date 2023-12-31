import { AddressDomain } from '@data';

export interface Location {
  latitude: number;
  longitude: number;
}

export interface Region extends Location {
  latitudeDelta: number;
  longitudeDelta: number;
}

export interface GeographicalInformation {
  address: AddressDomain;
  region: Region;
}
