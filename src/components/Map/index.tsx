import React from 'react';

import { useMap } from './useMap';

import * as S from './styles';

export function Map() {
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
        />
      )}
    </S.Container>
  );
}
