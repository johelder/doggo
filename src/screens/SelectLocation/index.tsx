import React, { useCallback, useLayoutEffect } from 'react';

import { useTheme } from 'styled-components';

import { useMap } from '@src/hooks';
import { useSelectLocation } from './useSelectLocation';

import { Button, Loader, Map, CustomHeader } from '@src/components';
import { CustomHeaderTitle } from '@src/components/CustomHeader/components/CustomHeaderTitle';
import { Marker } from './components/Marker';

import type { TSelectLocationProps } from './types';

import * as S from './styles';

export function SelectLocation({
  navigation,
}: TSelectLocationProps): JSX.Element {
  const {
    onTouchStart,
    onRegionChangeComplete,
    onMapReady,
    isLoadingUserAddress,
    userAddress,
    handleNavigateToCreateFeeder,
    isShowingTooltip,
  } = useSelectLocation();
  const { currentUserLocation } = useMap();
  const theme = useTheme();

  const renderCustomHeaderTitle = useCallback(() => {
    if (!userAddress) {
      return '';
    }

    if (isLoadingUserAddress) {
      return <Loader.Component />;
    }

    return (
      <CustomHeaderTitle
        title={`${userAddress?.thoroughfare}, ${userAddress?.name}`}
        subTitle={`${userAddress?.subLocality} - ${userAddress?.subAdministrativeArea}`}
      />
    );
  }, [isLoadingUserAddress, userAddress]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: renderCustomHeaderTitle,
    });
  }, [navigation, renderCustomHeaderTitle]);

  return (
    <S.Container>
      <CustomHeader />

      {currentUserLocation && (
        <Map
          onMapReady={onMapReady}
          showsUserLocation
          onRegionChangeComplete={onRegionChangeComplete}
          onTouchStart={onTouchStart}
        />
      )}

      <Marker isTooltipVisible={isShowingTooltip} />

      <S.ButtonContainer>
        <Button.Root
          disabled={isLoadingUserAddress}
          type="filled"
          color={theme.colors.primary[500]}
          onPress={handleNavigateToCreateFeeder}>
          <Button.Text color={theme.colors.utils.white}>Continuar</Button.Text>
        </Button.Root>
      </S.ButtonContainer>
    </S.Container>
  );
}
