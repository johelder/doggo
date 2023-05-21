import { ReactNode } from 'react';
import { MapViewProps } from 'react-native-maps';

export interface IMapProps extends MapViewProps {
  children?: ReactNode;
}

export interface ICurrentUserLocation {
  latitude: number | null;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}
