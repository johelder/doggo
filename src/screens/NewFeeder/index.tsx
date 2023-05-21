import React from 'react';

import { Marker } from 'react-native-maps';

import { useMap } from '@src/hooks';
import { useNewFeeder } from './useNewFeeder';

import { Map } from '@src/components';
import { CustomHeader } from './components/CustomHeader';

import * as S from './styles';

export function NewFeeder(): JSX.Element {
  const { onDragStart, onDragEnd } = useNewFeeder();
  const { currentUserLocation } = useMap();

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
