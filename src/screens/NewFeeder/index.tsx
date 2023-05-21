import React, { useCallback, useEffect, useLayoutEffect } from 'react';

import { Marker } from 'react-native-maps';

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
    fetchInitialUserAddress,
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

  useEffect(() => {
    fetchInitialUserAddress();
  }, [fetchInitialUserAddress]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: renderCustomHeaderTitle,
    });
  }, [navigation, renderCustomHeaderTitle]);

  return (
    <S.Container>
      <CustomHeader />

      {currentUserLocation && (
        <Map>
          <Marker
            draggable
            coordinate={{
              latitude: currentUserLocation?.coords.latitude,
              longitude: currentUserLocation?.coords.longitude,
            }}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
          />
        </Map>
      )}
    </S.Container>
  );
}
