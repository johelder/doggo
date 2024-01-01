import React from 'react';

import { useTheme } from 'styled-components/native';

import { Button, Map, CustomHeader, grayScale } from '@components';

import { Marker } from './components/Marker';
import * as Styled from './styles';
import { useSelectLocation } from './useSelectLocation';

export function SelectLocation(): React.JSX.Element {
  const {
    onTouchStart,
    onRegionChangeComplete,
    onMapReady,
    isLoadingAddress,
    handleNavigateToCreateFeeder,
    isShowingTooltip,
    geographicalInformation: { address, region },
  } = useSelectLocation();

  const theme = useTheme();

  return (
    <Styled.Container>
      <CustomHeader
        title={`${address?.street}, ${address?.houseNumber}`}
        subTitle={`${address?.neighborhood} - ${address?.city}`}
        isLoading={isLoadingAddress}
      />

      <Map
        onMapReady={onMapReady}
        showsUserLocation
        onRegionChangeComplete={onRegionChangeComplete}
        onTouchStart={onTouchStart}
        region={region}
        customMapStyle={grayScale}
      />

      <Marker isTooltipVisible={isShowingTooltip} />

      <Styled.ButtonContainer>
        <Button.Root
          disabled={isLoadingAddress || !address}
          type="filled"
          color={theme.colors.orange[500]}
          onPress={handleNavigateToCreateFeeder}>
          <Button.Text color={theme.colors.gray[0]}>Continuar</Button.Text>
        </Button.Root>
      </Styled.ButtonContainer>
    </Styled.Container>
  );
}
