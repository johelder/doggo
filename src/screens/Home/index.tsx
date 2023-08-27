import React, { useCallback } from 'react';
import { ListRenderItemInfo, StatusBar } from 'react-native';
import { Marker } from 'react-native-maps';
import { useTheme } from 'styled-components/native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import X from 'phosphor-react-native/src/icons/X';
import CaretDown from 'phosphor-react-native/src/icons/CaretDown';
import CaretUp from 'phosphor-react-native/src/icons/CaretUp';

import { useHome } from './useHome';
import {
  Loader,
  Map,
  FeederCard,
  RequestLocationPermissionModal,
  RequestLocationPermissionBanner,
} from '@components';
import { grayScale } from '@app/src/components/Map/customStyles';
import { CustomMarker } from './components/CustomMarker';

import type { IFeeder } from '@types';

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
    isNearFeederListExpanded,
    handleToggleNearFeederList,
    requestLocationPermissionModalRef,
    isLocationAvailable,
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

  if (!isLocationAvailable) {
    return (
      <S.LocationNotAvailableContainer>
        <RequestLocationPermissionBanner />

        <RequestLocationPermissionModal
          modalRef={requestLocationPermissionModalRef}
        />
      </S.LocationNotAvailableContainer>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />

      <S.Container>
        {isLoadingMap && <Loader.Page />}

        <S.Content>
          <S.MapContainer
            hasNearFeeders={nearFeeders.length > 0}
            isNearFeederListExpanded={isNearFeederListExpanded}>
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

        {nearFeeders.length > 0 && isLocationAvailable && (
          <S.NearFeedersContainer tabBarHeight={tabBarHeight}>
            <S.HeaderContainer onPress={handleToggleNearFeederList}>
              <S.Title>Comedouros perto de você</S.Title>
              {isNearFeederListExpanded ? (
                <CaretDown weight="bold" color={theme.colors.gray[700]} />
              ) : (
                <CaretUp weight="bold" color={theme.colors.gray[700]} />
              )}
            </S.HeaderContainer>

            {isNearFeederListExpanded && (
              <S.NearFeeders
                data={nearFeeders}
                keyExtractor={nearFeeder => String(nearFeeder.id)}
                renderItem={renderNearFeeder}
                showsHorizontalScrollIndicator={false}
              />
            )}
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
