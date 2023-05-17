import React from 'react';

import { useMap } from './useMap';
import { IMapProps } from './types';

import * as S from './styles';

export function Map({ ...rest }: IMapProps) {
  const { currentUserLocation, mapRef } = useMap();

  return (
    <S.Container>
      {currentUserLocation && (
        <S.Map
          ref={mapRef}
          initialRegion={{
            latitude: currentUserLocation?.coords.latitude,
            longitude: currentUserLocation?.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          showsUserLocation
          showsMyLocationButton={false}
          {...rest}
        />
      )}
    </S.Container>
  );
}
