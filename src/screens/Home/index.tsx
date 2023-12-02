import React, { useCallback } from 'react';
import { ListRenderItemInfo, StatusBar } from 'react-native';

import { PlusIcon } from '@app/src/assets/icons/PlusIcon';
import { grayScale } from '@app/src/components/Map/customStyles';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import CaretDown from 'phosphor-react-native/src/icons/CaretDown';
import CaretUp from 'phosphor-react-native/src/icons/CaretUp';
import X from 'phosphor-react-native/src/icons/X';
import { Marker } from 'react-native-maps';
import { useTheme } from 'styled-components/native';

import {
  Loader,
  Map,
  FeederCard,
  RequestLocationPermissionModal,
  RequestLocationPermissionBanner,
  Button,
} from '@components';
import { IFeeder } from '@types';

import { CustomMarker } from './components/CustomMarker';
import * as S from './styles';
import { useHome } from './useHome';

export function Home(): JSX.Element {
  const {
    isLoadingMap,
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
    handleRedirectToSelectLocation,
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

  const NearFeederList = useCallback(() => {
    if (nearFeeders.length <= 0) {
      return (
        <S.ListEmptyContainer>
          <S.Title>Nenhum comedouro próximo.</S.Title>
          <S.Description>
            Que tal cadastrar seu comedouro e ajudar animais próximos a você?
          </S.Description>

          <Button.Root type="filled" onPress={handleRedirectToSelectLocation}>
            <Button.Icon>
              <PlusIcon size={24} color={theme.colors.gray[0]} />
            </Button.Icon>

            <Button.Text>Novo comedouro</Button.Text>
          </Button.Root>
        </S.ListEmptyContainer>
      );
    }

    if (!isNearFeederListExpanded) {
      return null;
    }

    return (
      <S.NearFeeders
        data={nearFeeders}
        keyExtractor={(nearFeeder: IFeeder) => String(nearFeeder.id)}
        renderItem={renderNearFeeder}
        showsHorizontalScrollIndicator={false}
      />
    );
  }, [
    handleRedirectToSelectLocation,
    isNearFeederListExpanded,
    nearFeeders,
    renderNearFeeder,
    theme.colors.gray,
  ]);

  if (isLoadingMap) {
    return <Loader.Page />;
  }

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
        <S.Content>
          <S.MapContainer
            hasNearFeeders={nearFeeders.length > 0}
            isNearFeederListExpanded={isNearFeederListExpanded}>
            <Map
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
            </Map>
          </S.MapContainer>
        </S.Content>

        <S.NearFeedersContainer tabBarHeight={tabBarHeight}>
          {nearFeeders.length > 0 && (
            <S.HeaderContainer onPress={handleToggleNearFeederList}>
              <S.Title>Comedouros perto de você</S.Title>
              {isNearFeederListExpanded ? (
                <CaretDown weight="bold" color={theme.colors.gray[700]} />
              ) : (
                <CaretUp weight="bold" color={theme.colors.gray[700]} />
              )}
            </S.HeaderContainer>
          )}

          <NearFeederList />
        </S.NearFeedersContainer>

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
