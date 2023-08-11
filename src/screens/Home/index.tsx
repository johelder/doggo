import React, { useCallback } from 'react';
import { ListRenderItemInfo, StatusBar } from 'react-native';
import { Marker } from 'react-native-maps';
import { useTheme } from 'styled-components';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import X from 'phosphor-react-native/src/icons/X';

import { useHome } from './useHome';
import { Loader, Map, FeederCard } from '@src/components';
import { grayScale } from '@src/components/Map/customStyles';
import { CustomMarker } from './components/CustomMarker';

import type { IFeeder } from '@src/types';

import * as S from './styles';

export function Home(): JSX.Element {
  const {
    isLoadingMap,
    onMapLoaded,
    feeders,
    nearFeeders,
    isTooltipVisible,
    setIsTooltipVisible,
    currentFeederOpened,
    handleOpenTooltip,
    handleClickOnNearFeeder,
  } = useHome();
  const theme = useTheme();
  const tabBarHeight = useBottomTabBarHeight();

  const renderNearFeeder = useCallback(
    ({ item: nearFeeder }: ListRenderItemInfo<IFeeder>) => {
      return (
        <S.NearFeederContainer
          onPress={() => handleClickOnNearFeeder(nearFeeder.coordinates)}>
          <FeederCard feeder={nearFeeder} />
        </S.NearFeederContainer>
      );
    },
    [handleClickOnNearFeeder],
  );

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />

      {isLoadingMap && <Loader.Page />}

      <S.Container>
        <S.Content>
          <S.MapContainer hasNearFeeders={nearFeeders.length > 0}>
            <Map
              isClustering
              showsUserLocation
              onMapReady={onMapLoaded}
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
          </S.MapContainer>
        </S.Content>

        {nearFeeders.length > 0 && (
          <S.NearFeedersContainer tabBarHeight={tabBarHeight}>
            <S.Title>Comedouros perto de você</S.Title>

            <S.NearFeeders
              data={nearFeeders}
              keyExtractor={nearFeeder => String(nearFeeder.id)}
              renderItem={renderNearFeeder}
              showsHorizontalScrollIndicator={false}
            />
          </S.NearFeedersContainer>
        )}

        {isTooltipVisible && (
          <>
            <S.Overlay onTouchStart={() => setIsTooltipVisible(false)} />

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
