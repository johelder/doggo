import React, { useEffect } from 'react';

import { useMap } from '@src/hooks';
import { IMapProps } from './types';

import * as S from './styles';

export function Map({ children, ...rest }: IMapProps) {
  const {
    currentUserLocation,
    mapRef,
    watchUserPosition,
    getUserCurrentPosition,
  } = useMap();

  useEffect(() => {
    getUserCurrentPosition();
  }, [getUserCurrentPosition]);

  useEffect(() => {
    watchUserPosition();
  }, [watchUserPosition]);

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
          showsMyLocationButton={false}
          {...rest}>
          {children}
        </S.Map>
      )}
    </S.Container>
  );
}
