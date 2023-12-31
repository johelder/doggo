import { useCallback, useRef, useState } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
import { Region } from 'react-native-maps';

import { GeographicalInformation, Location } from '@domain';
import { useMap } from '@hooks';
import { TRootStackScreenProps } from '@types';

export function useSelectLocation() {
  const [isLoadingAddress, setIsLoadingAddress] = useState(false);
  const [isShowingTooltip, setIsShowingTooltip] = useState(true);
  const [geographicalInformation, setGeographicalInformation] =
    useState<GeographicalInformation>({} as GeographicalInformation);

  const selectLocationCallBackTimeoutId = useRef<NodeJS.Timeout>();

  const { currentUserLocation, getAddressByCoordinate } = useMap();

  const navigation = useNavigation();
  const route = useRoute<TRootStackScreenProps<'SelectLocation'>['route']>();

  const currentLocation = route.params?.location ?? currentUserLocation;

  function handleNavigateToCreateFeeder() {
    const params = {
      address: geographicalInformation.address,
      coordinate: {
        latitude: geographicalInformation.region.latitude,
        longitude: geographicalInformation.region.longitude,
      },
    };

    if (route.params?.feederId) {
      return navigation.navigate('EditFeeder', {
        ...params,
        feederId: route.params?.feederId,
      });
    }

    navigation.navigate('CreateFeeder', params);
  }

  function onTouchStart() {
    setIsLoadingAddress(true);
    setIsShowingTooltip(false);

    clearTimeout(selectLocationCallBackTimeoutId.current);
  }

  async function onRegionChangeComplete({ latitude, longitude }: Region) {
    selectLocationCallBackTimeoutId.current = setTimeout(async () => {
      fetchGeographicalInformation({ latitude, longitude });
    }, 1000);
  }

  function onMapReady() {
    fetchGeographicalInformation(currentLocation);
  }

  const fetchGeographicalInformation = useCallback(
    async (location: Location) => {
      const { address, region } = await getAddressByCoordinate(location);

      setGeographicalInformation({ address, region });
      setIsLoadingAddress(false);
    },
    [getAddressByCoordinate],
  );

  return {
    geographicalInformation,
    onTouchStart,
    onRegionChangeComplete,
    onMapReady,
    isLoadingAddress,
    handleNavigateToCreateFeeder,
    isShowingTooltip,
  };
}
