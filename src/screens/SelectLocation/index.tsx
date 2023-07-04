import React, { useCallback, useLayoutEffect } from 'react';

import { useTheme } from 'styled-components';

import { useSelectLocation } from './useSelectLocation';

import { Button, Loader, Map, CustomHeader } from '@src/components';
import { CustomHeaderTitle } from '@src/components/CustomHeader/components/CustomHeaderTitle';
import { Marker } from './components/Marker';
import { LATITUDE_DELTA, LONGITUDE_DELTA } from '@src/components/Map/constants';

import type { TSelectLocationProps } from './types';

import * as S from './styles';

export function SelectLocation({
  navigation,
}: TSelectLocationProps): JSX.Element {
  const {
    onTouchStart,
    onRegionChangeComplete,
    onMapReady,
    isLoadingAddress,
    address,
    handleNavigateToCreateFeeder,
    isShowingTooltip,
    region,
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
        title={`${address?.thoroughfare}, ${address?.name}`}
        subTitle={`${address?.subLocality} - ${address?.subAdministrativeArea}`}
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

      {region && (
        <Map
          onMapReady={onMapReady}
          showsUserLocation
          onRegionChangeComplete={onRegionChangeComplete}
          onTouchStart={onTouchStart}
          region={{
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        />
      )}

      <Marker isTooltipVisible={isShowingTooltip} />

      <S.ButtonContainer>
        <Button.Root
          disabled={isLoadingAddress}
          type="filled"
          color={theme.colors.primary[500]}
          onPress={handleNavigateToCreateFeeder}>
          <Button.Text color={theme.colors.utils.white}>Continuar</Button.Text>
        </Button.Root>
      </S.ButtonContainer>
    </S.Container>
  );
}
