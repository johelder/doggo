import React from 'react';

import { Marker } from 'react-native-maps';

import {
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
  MAX_ZOOM_LEVEL,
  MIN_ZOOM_LEVEL,
} from '../../constants';
import { grayScale } from '../../customStyles';

import * as S from './styles';
import { MiniMapProps } from './types';

export function MiniMap({ coords, headerHeight }: MiniMapProps) {
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
      maxZoomLevel={MAX_ZOOM_LEVEL}
      customMapStyle={grayScale}>
      <Marker
        coordinate={{
          latitude: coords.latitude,
          longitude: coords.longitude,
        }}
      />
    </S.Container>
  );
}
