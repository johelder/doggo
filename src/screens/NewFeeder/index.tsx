import React, { useCallback, useLayoutEffect } from 'react';

import { Callout, Marker } from 'react-native-maps';

import { useMap } from '@src/hooks';
import { useNewFeeder } from './useNewFeeder';

import { Loader, Map } from '@src/components';
import { CustomHeader } from './components/CustomHeader';
import { CustomHeaderTitle } from './components/CustomHeaderTitle';
import { TNewFeederProps } from './types';

import * as S from './styles';

export function NewFeeder({ navigation }: TNewFeederProps): JSX.Element {
  const {
    onDragStart,
    onDragEnd,
    onMapLoaded,
    markerRef,
    isLoadingUserAddress,
    userAddress,
  } = useNewFeeder();
  const { currentUserLocation } = useMap();

  const renderCustomHeaderTitle = useCallback(() => {
    if (!userAddress) {
      return '';
    }

    if (isLoadingUserAddress) {
      return <Loader />;
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
        <Map onMapLoaded={onMapLoaded}>
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
                  <S.CalloutTitle>Você está aqui?</S.CalloutTitle>
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
    </S.Container>
  );
}
