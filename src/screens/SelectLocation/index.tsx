import React, { useCallback, useLayoutEffect } from 'react';
import { useTheme } from 'styled-components/native';

import { useSelectLocation } from './useSelectLocation';

import { Button, Loader, Map, CustomHeader } from '@components';
import { CustomHeaderTitle } from '@app/src/components/CustomHeader/components/CustomHeaderTitle';
import { Marker } from './components/Marker';
import { grayScale } from '@app/src/components/Map/customStyles';
import {
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
} from '@app/src/components/Map/constants';

import type { TRootStackScreenProps } from '@types';

import * as S from './styles';

export function SelectLocation({
  navigation,
}: TRootStackScreenProps<'SelectLocation'>): JSX.Element {
  const {
    onTouchStart,
    onRegionChangeComplete,
    onMapReady,
    isLoadingAddress,
    address,
    handleNavigateToCreateFeeder,
    isShowingTooltip,
    initialRegion,
  } = useSelectLocation();
  const theme = useTheme();

  const renderCustomHeaderTitle = useCallback(() => {
    if (!address) {
      return '';
    }

    if (isLoadingAddress) {
      return <Loader.Component />;
    }

    return (
      <CustomHeaderTitle
        title={`${address.street}, ${address.houseNumber}`}
        subTitle={`${address.neighborhood} - ${address.city}`}
      />
    );
  }, [isLoadingAddress, address]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: renderCustomHeaderTitle,
    });
  }, [navigation, renderCustomHeaderTitle]);

  return (
    <S.Container>
      <CustomHeader />

      {initialRegion && (
        <Map
          onMapReady={onMapReady}
          showsUserLocation
          onRegionChangeComplete={onRegionChangeComplete}
          onTouchStart={onTouchStart}
          region={{
            latitude: initialRegion.latitude,
            longitude: initialRegion.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          customMapStyle={grayScale}
        />
      )}

      <Marker isTooltipVisible={isShowingTooltip} />

      <S.ButtonContainer>
        <Button.Root
          disabled={isLoadingAddress}
          type="filled"
          color={theme.colors.orange[500]}
          onPress={handleNavigateToCreateFeeder}>
          <Button.Text color={theme.colors.gray[0]}>Continuar</Button.Text>
        </Button.Root>
      </S.ButtonContainer>
    </S.Container>
  );
}
