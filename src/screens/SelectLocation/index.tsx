import React, { useCallback, useLayoutEffect } from 'react';

import { Callout, Marker } from 'react-native-maps';
import { useTheme } from 'styled-components';

import { useMap } from '@src/hooks';
import { useSelectLocation } from './useSelectLocation';

import { Button, Loader, Map } from '@src/components';
import { CustomHeader } from '../../components/CustomHeader';
import { CustomHeaderTitle } from '../../components/CustomHeader/CustomHeaderTitle';

import type { TSelectLocationProps } from './types';

import * as S from './styles';

export function SelectLocation({
  navigation,
}: TSelectLocationProps): JSX.Element {
  const {
    onDragStart,
    onDragEnd,
    onMapLoaded,
    markerRef,
    isLoadingUserAddress,
    userAddress,
    handleNavigateToCreateFeeder,
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
        <Map onMapLoaded={onMapLoaded} showsUserLocation>
          <Marker
            draggable
            coordinate={{
              latitude: currentUserLocation?.coords.latitude,
              longitude: currentUserLocation?.coords.longitude,
            }}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            ref={markerRef}>
            <Callout tooltip>
              <S.CalloutContainer>
                <S.CalloutContent>
                  <S.CalloutTitle>Seu comedouro é aqui?</S.CalloutTitle>
                  <S.CalloutDescription>
                    Toque e segure para ajustar{'\n'} a localização
                  </S.CalloutDescription>
                </S.CalloutContent>

                <S.ToolTipTriangle />
              </S.CalloutContainer>
            </Callout>
          </Marker>
        </Map>
      )}

      <S.ButtonContainer>
        <Button.Root
          disabled={isLoadingUserAddress}
          type="filled"
          color={theme.colors.primary[500]}
          onPress={handleNavigateToCreateFeeder}>
          <Button.Text color={theme.colors.utils.white}>Confirmar</Button.Text>
        </Button.Root>
      </S.ButtonContainer>
    </S.Container>
  );
}
