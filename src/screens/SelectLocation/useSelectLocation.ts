import { useCallback, useEffect, useState } from 'react';
import type { Address, Region } from 'react-native-maps';
import { useNavigation, useRoute } from '@react-navigation/native';

import { useMap } from '@src/hooks';
import { errorHandler, showToast } from '@src/utils';

import type {
  TNavigationProps,
  TRouteProps,
} from '@src/routes/authenticated/types';
import { FeedersRepository } from '@src/services/database/repositories/FeedersRepository';
import { TCoordinates } from '@src/types/common';

export function useSelectLocation() {
  const [isLoadingAddress, setIsLoadingAddress] = useState(false);
  const [address, setAddress] = useState<Address | undefined>(undefined);
  const [isShowingTooltip, setIsShowingTooltip] = useState(true);
  const [initialRegion, setInitialRegion] = useState<TCoordinates | null>(null);
  const { mapRef, currentUserLocation, setCurrentUserLocation } = useMap();

  const navigation = useNavigation<TNavigationProps<'SelectLocation'>>();
  const route = useRoute<TRouteProps<'SelectLocation'>>();
  const isEditingFeederAddress = route.params?.feederId;

  const region = initialRegion ? initialRegion : currentUserLocation?.coords;

  function handleNavigateToCreateFeeder() {
    if (!address || !region) {
      return;
    }

    navigation.navigate('CreateFeeder', {
      address: {
        street: address.thoroughfare,
        houseNumber: address.name,
        neighborhood: address.subLocality,
        city: address.subAdministrativeArea,
      },
      coordinate: {
        latitude: region.latitude,
        longitude: region.longitude,
      },
    });
  }

  function onTouchStart() {
    setIsLoadingAddress(true);
    setIsShowingTooltip(false);
  }

  async function onRegionChangeComplete(currentRegion: Region) {
    const { latitude, longitude } = currentRegion;

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
    setAddress(fetchedUserAddress);
    setIsLoadingAddress(false);
  }

  function onMapReady() {
    if (isEditingFeederAddress) {
      return;
    }

    fetchInitialUserAddress();
  }

  const getAddressByCoordinate = useCallback(
    async (latitude: number, longitude: number) => {
      try {
        const currentAddress = await mapRef.current?.addressForCoordinate({
          latitude,
          longitude,
        });

        return currentAddress;
      } catch (error) {
        errorHandler.reportError(error, getAddressByCoordinate.name);
      }
    },
    [mapRef],
  );

  const fetchFeederAddressToEdit = useCallback(
    async (id: string) => {
      try {
        setIsLoadingAddress(true);

        const response = await FeedersRepository.findById(id);

        if (!response) {
          showToast({
            type: 'warning',
            message: 'Endereço não encontrado, tente novamente mais tarde.',
            duration: 4000,
          });

          return;
        }

        const fetchedAddress = await getAddressByCoordinate(
          response.coordinates.latitude,
          response.coordinates.longitude,
        );

        setAddress(fetchedAddress);
        setInitialRegion(response.coordinates);
        setIsLoadingAddress(false);
      } catch (error) {
        errorHandler.reportError(error, fetchFeederAddressToEdit.name);

        showToast({
          type: 'error',
          message:
            'Ocorreu um erro no servidor, por favor, tente novamente mais tarde.',
          duration: 4000,
        });
      }
    },
    [getAddressByCoordinate],
  );

  const fetchInitialUserAddress = useCallback(async () => {
    setIsLoadingAddress(true);

    if (!currentUserLocation) {
      return;
    }

    const fetchedUserAddress = await getAddressByCoordinate(
      currentUserLocation.coords.latitude,
      currentUserLocation.coords.longitude,
    );

    setAddress(fetchedUserAddress);
    setIsLoadingAddress(false);
  }, [currentUserLocation, getAddressByCoordinate]);

  useEffect(() => {
    if (isEditingFeederAddress) {
      fetchFeederAddressToEdit(route.params.feederId);
    }
  }, [
    fetchFeederAddressToEdit,
    isEditingFeederAddress,
    route.params?.feederId,
  ]);

  return {
    onTouchStart,
    onRegionChangeComplete,
    onMapReady,
    isLoadingAddress,
    address,
    handleNavigateToCreateFeeder,
    isShowingTooltip,
    initialRegion,
    region,
  };
}
