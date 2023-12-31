import React from 'react';
import { StyleSheet, View } from 'react-native';

import { useTheme } from 'styled-components/native';

import { useMap } from '@domain';

import { LATITUDE_DELTA, LONGITUDE_DELTA } from './constants';
import { MapProps } from './types';
import { useMapComponent } from './useMapComponent';

export function Map({
  isClustering = false,
  children,
  ...rest
}: MapProps): JSX.Element {
  const { currentUserLocation, mapRef } = useMap();
  const { MapComponent } = useMapComponent(isClustering);
  const theme = useTheme();

  return (
    <View>
      <MapComponent
        ref={mapRef}
        initialRegion={{
          latitude: currentUserLocation.latitude,
          longitude: currentUserLocation.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        showsMyLocationButton={false}
        style={mapStyles.container}
        clusterColor={theme.colors.orange[500]}
        toolbarEnabled={false}
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
