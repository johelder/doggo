import { useMemo } from 'react';
import MapView from 'react-native-maps';
import ClusteredMapView from 'react-native-map-clustering';

export function useMapComponent(isClustering: boolean) {
  const MapComponent = useMemo(
    () => (isClustering ? ClusteredMapView : MapView),
    [isClustering],
  );

  return { MapComponent };
}
