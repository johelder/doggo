import { MapViewProps } from 'react-native-maps';

export interface IMapProps extends MapViewProps {}

export interface ICurrentUserLocation {
  latitude: number | null;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}
