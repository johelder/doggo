import React from 'react';
import { StatusBar } from 'react-native';
import { Marker } from 'react-native-maps';

import { useHome } from './useHome';
import { Loader, Map } from '@src/components';
import { grayScale } from '@src/components/Map/customStyles';
import { CustomMarker } from './components/CustomMarker';
import { CustomCallout } from './components/CustomCallout';

import * as S from './styles';

export function Home(): JSX.Element {
  const {
    isLoadingMap,
    onMapLoaded,
    feeders,
    isTooltipVisible,
    setIsTooltipVisible,
    currentFeederOpened,
    handleOpenTooltip,
  } = useHome();

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />

      <S.Container>
        {isLoadingMap && <Loader.Page />}

        <Map
          isClustering
          showsUserLocation
          onMapLoaded={onMapLoaded}
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
        </Map>

        {isTooltipVisible && (
          <CustomCallout
            feeder={currentFeederOpened}
            onClose={() => setIsTooltipVisible(false)}
          />
        )}
      </S.Container>
    </>
  );
}
