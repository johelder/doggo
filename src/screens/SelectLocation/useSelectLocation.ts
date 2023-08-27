import { useCallback, useEffect, useState } from 'react';
import type { Address, Region } from 'react-native-maps';
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';

import { useMap } from '@hooks';
import { delay, errorHandler, showToast } from '@utils';

import { FeedersRepository } from '@services';
import { TCoordinates, TRootStackScreenProps } from '@types';

export function useSelectLocation() {
  const [isLoadingAddress, setIsLoadingAddress] = useState(false);
  const [address, setAddress] = useState<Address | undefined>(undefined);
  const [isShowingTooltip, setIsShowingTooltip] = useState(true);
  const [initialRegion, setInitialRegion] = useState<TCoordinates | null>(null);
  const [temporaryUserLocation, setTemporaryUserLocation] =
    useState<TCoordinates | null>(null);
  const {
    mapRef,
    currentUserLocation,
    setCurrentUserLocation,
    getUserCurrentPosition,
    watchUserPosition,
  } = useMap();
  const isScreenFocused = useIsFocused();

  const navigation = useNavigation();
  const route = useRoute<TRootStackScreenProps<'SelectLocation'>['route']>();
  const isEditingFeederAddress = route.params?.feederId;

  function handleNavigateToCreateFeeder() {
    if (!address || !temporaryUserLocation) {
      return;
    }

    setCurrentUserLocation({
      coords: {
        latitude: temporaryUserLocation?.latitude,
        longitude: temporaryUserLocation.longitude,
      },
    });

    const params = {
      address: {
        street: address.thoroughfare,
        houseNumber: address.name,
        neighborhood: address.subLocality,
        city: address.subAdministrativeArea,
      },
      coordinate: {
        latitude: temporaryUserLocation.latitude,
        longitude: temporaryUserLocation.longitude,
      },
    };

    if (isEditingFeederAddress) {
      navigation.navigate('EditFeeder', {
        ...params,
        feederId: route.params?.feederId,
      });

      return;
    }

    navigation.navigate('CreateFeeder', params);
  }

  function onPanDrag() {
    setIsLoadingAddress(true);
    setIsShowingTooltip(false);
  }

  async function onRegionChangeComplete(currentRegion: Region) {
    await delay(1000);

    const { latitude, longitude } = currentRegion;

    const fetchedUserAddress = await getAddressByCoordinate(
      latitude,
      longitude,
    );

    setTemporaryUserLocation({ latitude, longitude });
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

    return () => getUserCurrentPosition();
  }, [
    fetchFeederAddressToEdit,
    getUserCurrentPosition,
    isEditingFeederAddress,
    route.params?.feederId,
  ]);

  useEffect(() => {
    if (isScreenFocused) {
      getUserCurrentPosition();
    }

    const watchId = watchUserPosition();

    return () => Geolocation.clearWatch(watchId);
  }, [getUserCurrentPosition, isScreenFocused, watchUserPosition]);

  return {
    onPanDrag,
    onRegionChangeComplete,
    onMapReady,
    isLoadingAddress,
    address,
    handleNavigateToCreateFeeder,
    isShowingTooltip,
    initialRegion: initialRegion ?? currentUserLocation?.coords,
  };
}
