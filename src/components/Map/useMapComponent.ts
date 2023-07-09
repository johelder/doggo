import { useMemo, useEffect } from 'react';
import MapView from 'react-native-maps';
import ClusteredMapView from 'react-native-map-clustering';

import { useMap } from '@src/hooks';

export function useMapComponent(isClustering: boolean) {
  const { watchUserPosition, getUserCurrentPosition } = useMap();

  const MapComponent = useMemo(
    () => (isClustering ? ClusteredMapView : MapView),
    [isClustering],
  );

  useEffect(() => {
    getUserCurrentPosition();
  }, [getUserCurrentPosition]);

  useEffect(() => {
    watchUserPosition();
  }, [watchUserPosition]);

  return { MapComponent };
}
