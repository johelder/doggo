import { useEffect, useRef, useState } from 'react';
import MapView from 'react-native-maps';

import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';

export function useMap() {
  const [currentUserLocation, setCurrentUserLocation] =
    useState<GeolocationResponse | null>(null);
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      location => {
        setCurrentUserLocation(location);
      },
      () => {
        console.log('error');
      },
      {
        enableHighAccuracy: true,
      },
    );
  }, []);

  useEffect(() => {
    Geolocation.watchPosition(
      location => {
        setCurrentUserLocation(location);

        mapRef.current?.animateCamera({
          center: location.coords,
        });
      },
      () => {
        console.log('error');
      },
      {
        enableHighAccuracy: true,
        timeout: 1000,
      },
    );
  }, []);

  return { currentUserLocation, mapRef };
}
