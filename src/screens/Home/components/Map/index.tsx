import React from 'react';

import { Marker } from 'react-native-maps';

import { Map as MapComponent, grayScale } from '@components';

import { CustomMarker } from '../CustomMarker';

import * as Styled from './styles';
import { MapProps } from './types';

export function Map({
  feeders,
  nearFeeders,
  isNearFeederListExpanded,
  setIsTooltipVisible,
  handleOpenTooltip,
}: MapProps): React.JSX.Element {
  return (
    <Styled.MapContainer
      hasNearFeeders={nearFeeders.length > 0}
      isNearFeederListExpanded={isNearFeederListExpanded}>
      <MapComponent
        isClustering
        showsUserLocation
        onPress={() => setIsTooltipVisible(false)}
        customMapStyle={grayScale}>
        {feeders.map((feeder, index) => (
          <Marker
            key={feeder.id}
            zIndex={index}
            coordinate={{
              latitude: feeder.coordinates.latitude,
              longitude: feeder.coordinates.longitude,
            }}
            tracksViewChanges={false}
            onPress={() => handleOpenTooltip(feeder)}>
            <CustomMarker />
          </Marker>
        ))}
      </MapComponent>
    </Styled.MapContainer>
  );
}
