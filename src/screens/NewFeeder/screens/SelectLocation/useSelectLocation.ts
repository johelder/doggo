import { useCallback, useRef, useState } from 'react';
import { Address, MapMarker, MarkerDragStartEndEvent } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

import { useMap } from '@src/hooks';
import { errorHandler } from '@src/utils';

import { TNavigationProps } from '@src/routes/authenticated/types';

export function useSelectLocation() {
  const [isLoadingUserAddress, setIsLoadingUserAddress] = useState(false);
  const [userAddress, setUserAddress] = useState<Address | undefined>(
    undefined,
  );
  const markerRef = useRef<MapMarker>(null);
  const { mapRef, currentUserLocation, setCurrentUserLocation } = useMap();

  const navigation = useNavigation<TNavigationProps<'SelectLocation'>>();

  function handleNavigateToCreateFeeder() {
    if (!userAddress || !currentUserLocation) {
      return;
    }

    navigation.navigate('CreateFeeder', {
      address: {
        street: userAddress?.thoroughfare,
        houseNumber: userAddress?.name,
        neighborhood: userAddress?.subLocality,
        city: userAddress?.subAdministrativeArea,
      },
      coordinate: {
        latitude: currentUserLocation?.coords.latitude,
        longitude: currentUserLocation?.coords.longitude,
      },
    });
  }

  function onDragStart() {
    setIsLoadingUserAddress(true);
    markerRef.current?.hideCallout();
  }

  async function onDragEnd(event: MarkerDragStartEndEvent) {
    const { latitude, longitude } = event.nativeEvent.coordinate;

    const fetchedUserAddress = await getAddressByCoordinate(
      latitude,
      longitude,
    );

    setCurrentUserLocation({
      coords: {
        latitude,
        longitude,
      },
    });
    setUserAddress(fetchedUserAddress);
    setIsLoadingUserAddress(false);
  }

  function onMapLoaded() {
    fetchInitialUserAddress();
    markerRef.current?.showCallout();
  }

  const getAddressByCoordinate = useCallback(
    async (latitude: number, longitude: number) => {
      try {
        const address = await mapRef.current?.addressForCoordinate({
          latitude,
          longitude,
        });

        return address;
      } catch (error) {
        errorHandler.reportError(error, 'getAddressByCoordinate');
      }
    },
    [mapRef],
  );

  const fetchInitialUserAddress = useCallback(async () => {
    setIsLoadingUserAddress(true);

    if (!currentUserLocation) {
      return;
    }

    const fetchedUserAddress = await getAddressByCoordinate(
      currentUserLocation?.coords.latitude,
      currentUserLocation?.coords.longitude,
    );

    setUserAddress(fetchedUserAddress);
    setIsLoadingUserAddress(false);
  }, [currentUserLocation, getAddressByCoordinate]);

  return {
    onDragStart,
    onDragEnd,
    onMapLoaded,
    markerRef,
    isLoadingUserAddress,
    userAddress,
    handleNavigateToCreateFeeder,
  };
}
