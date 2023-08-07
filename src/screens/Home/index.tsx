import React from 'react';
import { StatusBar } from 'react-native';
import { Marker } from 'react-native-maps';
import { useTheme } from 'styled-components';

import X from 'phosphor-react-native/src/icons/X';

import { useHome } from './useHome';
import { Loader, Map, FeederCard } from '@src/components';
import { grayScale } from '@src/components/Map/customStyles';
import { CustomMarker } from './components/CustomMarker';

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
  const theme = useTheme();

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
          <>
            <S.Overlay pointerEvents="none" />

            <S.CustomCalloutContainer>
              <FeederCard
                feeder={currentFeederOpened}
                onClose={() => setIsTooltipVisible(false)}
                sideButton={
                  <S.CloseButton onPress={() => setIsTooltipVisible(false)}>
                    <X size={18} color={theme.colors.gray[700]} weight="bold" />
                  </S.CloseButton>
                }
              />
            </S.CustomCalloutContainer>
          </>
        )}
      </S.Container>
    </>
  );
}
