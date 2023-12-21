import { useCallback, useEffect, useRef, useState } from 'react';

import {
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { Region } from 'react-native-maps';

import { useFeederFindOne } from '@domain';
import { useMap } from '@hooks';
import { TAddress, TCoordinates, TRootStackScreenProps } from '@types';
import { errorHandler, showToast } from '@utils';

export function useSelectLocation() {
  const [isLoadingAddress, setIsLoadingAddress] = useState(false);
  const [address, setAddress] = useState<TAddress | undefined>(undefined);
  const [isShowingTooltip, setIsShowingTooltip] = useState(true);
  const [initialRegion, setInitialRegion] = useState<TCoordinates | null>(null);
  const [temporaryUserLocation, setTemporaryUserLocation] =
    useState<TCoordinates | null>(null);
  const selectLocationCallBackTimeoutId = useRef<NodeJS.Timeout>();

  const {
    mapRef,
    currentUserLocation,
    setCurrentUserLocation,
    getUserCurrentPosition,
  } = useMap();
  const isScreenFocused = useIsFocused();

  const navigation = useNavigation();
  const route = useRoute<TRootStackScreenProps<'SelectLocation'>['route']>();
  const isEditingFeederAddress = route.params?.feederId;

  const { feeder, isSuccess } = useFeederFindOne({
    id: route.params?.feederId!,
    enabled: !!route.params?.feederId,
  });

  function handleNavigateToCreateFeeder() {
    if (!address || !temporaryUserLocation) {
      return;
    }

    setCurrentUserLocation({
      coords: {
        latitude: temporaryUserLocation?.latitude,
        longitude: temporaryUserLocation?.longitude,
      },
    });

    const params = {
      address,
      coordinate: {
        latitude: temporaryUserLocation?.latitude,
        longitude: temporaryUserLocation?.longitude,
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

  function onTouchStart() {
    setIsLoadingAddress(true);
    setIsShowingTooltip(false);

    clearTimeout(selectLocationCallBackTimeoutId.current);
  }

  async function onRegionChangeComplete(currentRegion: Region) {
    selectLocationCallBackTimeoutId.current = setTimeout(async () => {
      const { latitude, longitude } = currentRegion;

      const fetchedUserAddress = await getAddressByCoordinate(
        latitude,
        longitude,
      );

      if (!fetchedUserAddress) {
        setIsLoadingAddress(false);

        return;
      }

      setTemporaryUserLocation({ latitude, longitude });
      setAddress(fetchedUserAddress);
      setIsLoadingAddress(false);
    }, 1000);
  }

  function onMapReady() {
    if (isEditingFeederAddress) {
      return;
    }

    fetchInitialUserAddress();
  }

  function formatAddressLabel(
    type: 'houseNumber' | 'street' | 'neighborhood' | 'city',
    label?: string,
  ) {
    const labelSwitch = {
      houseNumber: 'Sem número',
      street: 'Rua sem nome',
      neighborhood: 'Bairro desconhecido',
      city: 'Cidade desconhecida',
    };

    if (!label || label === 'Unnamed Road') {
      return labelSwitch[type];
    }

    return label;
  }

  const getAddressByCoordinate = useCallback(
    async (latitude: number, longitude: number) => {
      try {
        const currentAddress = await mapRef.current?.addressForCoordinate({
          latitude,
          longitude,
        });

        const formattedAddress: TAddress = {
          street: formatAddressLabel('street', currentAddress?.thoroughfare),
          houseNumber: formatAddressLabel('houseNumber', currentAddress?.name),
          neighborhood: formatAddressLabel(
            'neighborhood',
            currentAddress?.subLocality,
          ),
          city: formatAddressLabel(
            'city',
            currentAddress?.subAdministrativeArea,
          ),
        };

        return formattedAddress;
      } catch (error) {
        errorHandler.reportError(error, getAddressByCoordinate.name);
        clearTimeout(selectLocationCallBackTimeoutId.current);
        setIsLoadingAddress(true);

        showToast({
          type: 'warning',
          message:
            'Não conseguimos obter o endereço, por favor, tente novamente.',
          duration: 3000,
        });
      }
    },
    [mapRef],
  );

  const fetchFeederAddressToEdit = useCallback(
    async (latitude: number, longitude: number) => {
      try {
        setIsLoadingAddress(true);

        const fetchedAddress = await getAddressByCoordinate(
          latitude,
          longitude,
        );

        setAddress(fetchedAddress);
        setInitialRegion({ latitude, longitude });
        setTemporaryUserLocation({ latitude, longitude });
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
    setTemporaryUserLocation({
      latitude: currentUserLocation.coords.latitude,
      longitude: currentUserLocation.coords.longitude,
    });
    setIsLoadingAddress(false);
  }, [currentUserLocation, getAddressByCoordinate]);

  useEffect(() => {
    if (isEditingFeederAddress && isSuccess && feeder) {
      fetchFeederAddressToEdit(
        feeder.coordinates.latitude,
        feeder.coordinates.longitude,
      );
    }

    return () => getUserCurrentPosition();
  }, [
    feeder,
    isSuccess,
    fetchFeederAddressToEdit,
    getUserCurrentPosition,
    isEditingFeederAddress,
  ]);

  useEffect(() => {
    if (isScreenFocused && !isEditingFeederAddress) {
      getUserCurrentPosition();
    }
  }, [feeder, getUserCurrentPosition, isEditingFeederAddress, isScreenFocused]);

  return {
    onTouchStart,
    onRegionChangeComplete,
    onMapReady,
    isLoadingAddress,
    address,
    handleNavigateToCreateFeeder,
    isShowingTooltip,
    initialRegion: initialRegion ?? currentUserLocation?.coords,
  };
}
