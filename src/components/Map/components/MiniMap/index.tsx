import React from 'react';

import { Marker } from 'react-native-maps';

import {
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
  MAX_ZOOM_LEVEL,
  MIN_ZOOM_LEVEL,
} from '../../constants';

import type { IMiniMapProps } from './types';

import * as S from './styles';

export function MiniMap({ coords, headerHeight }: IMiniMapProps) {
  return (
    <S.Container
      initialRegion={{
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }}
      style={{ marginTop: headerHeight }}
      zoomEnabled={false}
      zoomTapEnabled={false}
      zoomControlEnabled={false}
      scrollEnabled={false}
      minZoomLevel={MIN_ZOOM_LEVEL}
      maxZoomLevel={MAX_ZOOM_LEVEL}>
      <Marker
        coordinate={{
          latitude: coords.latitude,
          longitude: coords.longitude,
        }}
      />
    </S.Container>
  );
}
