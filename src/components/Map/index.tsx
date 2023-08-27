import React from 'react';
import { StyleSheet, View } from 'react-native';

import { useMap } from '@hooks';
import { useMapComponent } from './useMapComponent';
import { LATITUDE_DELTA, LONGITUDE_DELTA } from './constants';

import type { IMapProps } from './types';

export function Map({ isClustering = false, children, ...rest }: IMapProps) {
  const { currentUserLocation, mapRef } = useMap();
  const { MapComponent } = useMapComponent(isClustering);

  if (!currentUserLocation) {
    return null;
  }

  return (
    <View>
      <MapComponent
        ref={mapRef}
        initialRegion={{
          latitude: currentUserLocation?.coords.latitude,
          longitude: currentUserLocation?.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        showsMyLocationButton={false}
        style={mapStyles.container}
        {...rest}>
        {children}
      </MapComponent>
    </View>
  );
}

const mapStyles = StyleSheet.create({
  container: {
    minWidth: '100%',
    minHeight: '100%',
  },
});
