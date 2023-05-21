import { useCallback, useState } from 'react';
import { Address, MarkerDragStartEndEvent } from 'react-native-maps';

import { useMap } from '@src/hooks';

export function useNewFeeder() {
  const [isLoadingUserAddress, setIsLoadingUserAddress] = useState(false);
  const [userAddress, setUserAddress] = useState<Address | undefined>(
    undefined,
  );

  const { mapRef, currentUserLocation } = useMap();

  function onDragStart() {
    setIsLoadingUserAddress(true);
  }

  async function onDragEnd(event: MarkerDragStartEndEvent) {
    const { latitude, longitude } = event.nativeEvent.coordinate;

    const fetchedUserAddress = await getAddressByCoordinate(
      latitude,
      longitude,
    );

    setUserAddress(fetchedUserAddress);
    setIsLoadingUserAddress(false);
  }

  const getAddressByCoordinate = useCallback(
    (latitude: number, longitude: number) => {
      return mapRef.current?.addressForCoordinate({
        latitude,
        longitude,
      });
    },
    [mapRef],
  );

  const fetchInitialUserAddress = useCallback(async () => {
    try {
      setIsLoadingUserAddress(true);

      if (!currentUserLocation) {
        return;
      }

      const fetchedUserAddress = await getAddressByCoordinate(
        currentUserLocation?.coords.latitude,
        currentUserLocation?.coords.longitude,
      );

      setUserAddress(fetchedUserAddress);
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoadingUserAddress(false);
    }
  }, [currentUserLocation, getAddressByCoordinate]);

  return {
    onDragStart,
    onDragEnd,
    fetchInitialUserAddress,
    isLoadingUserAddress,
    userAddress,
  };
}
