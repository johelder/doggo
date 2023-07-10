import React from 'react';
import { StatusBar } from 'react-native';
import { Callout, Marker } from 'react-native-maps';

import { useHome } from './useHome';
import { Loader, Map } from '@src/components';
import { CustomMarker } from './components/CustomMarker';
import { CustomCallout } from './components/CustomCallout';

import * as S from './styles';

export function Home(): JSX.Element {
  const { isLoadingMap, onMapLoaded, feeders } = useHome();

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />

      <S.Container>
        {isLoadingMap && <Loader.Page />}

        <Map isClustering showsUserLocation onMapLoaded={onMapLoaded}>
          {feeders.map(feeder => (
            <Marker
              key={feeder.id}
              coordinate={{
                latitude: feeder.coordinates.latitude,
                longitude: feeder.coordinates.longitude,
              }}>
              <CustomMarker />

              <Callout tooltip>
                <CustomCallout feeder={feeder} />
              </Callout>
            </Marker>
          ))}
        </Map>
      </S.Container>
    </>
  );
}
