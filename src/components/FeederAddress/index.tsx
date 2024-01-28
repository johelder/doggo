import React from 'react';

import { useTheme } from 'styled-components/native';

import { getFoodsLabel } from '@utils';

import { Icon } from '../Icon';

import * as Styled from './styles';
import { FeederAddressProps } from './types';

export function FeederAddress({
  feeder,
  onOpenDetails,
}: FeederAddressProps): React.JSX.Element {
  const { street, houseNumber, neighborhood, city } = feeder.address;
  const theme = useTheme();

  return (
    <Styled.Container onPress={onOpenDetails} testID="feeder-address">
      <Icon name="mapPinFilled" color={theme.colors.orange[500]} />

      <Styled.LabelsContainer>
        <Styled.Title>
          {street}, {houseNumber}, {neighborhood} - {city}
        </Styled.Title>
        <Styled.Description>{getFoodsLabel(feeder.foods)}</Styled.Description>
      </Styled.LabelsContainer>

      <Styled.IconContainer>
        <Icon name="dotsThreeVertical" color={theme.colors.gray[700]} />
      </Styled.IconContainer>
    </Styled.Container>
  );
}
