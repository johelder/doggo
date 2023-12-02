import { useMemo } from 'react';

import ClusteredMapView from 'react-native-map-clustering';
import MapView from 'react-native-maps';

export function useMapComponent(isClustering: boolean) {
  const MapComponent = useMemo(
    () => (isClustering ? ClusteredMapView : MapView),
    [isClustering],
  );

  return { MapComponent };
}
