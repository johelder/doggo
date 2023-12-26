import React from 'react';

import { useTheme } from 'styled-components/native';

import { getFoodsLabel } from '@utils';

import { Icon } from '../Icon';

import * as S from './styles';
import { IFeederAddressProps } from './types';

export function FeederAddress({ feeder, onOpenDetails }: IFeederAddressProps) {
  const { street, houseNumber, neighborhood, city } = feeder.address;
  const theme = useTheme();

  return (
    <S.Container onPress={onOpenDetails}>
      <Icon name="mapPinFilled" color={theme.colors.orange[500]} />

      <S.LabelsContainer>
        <S.Title>
          {street}, {houseNumber}, {neighborhood} - {city}
        </S.Title>
        <S.Description>{getFoodsLabel(feeder.foods)}</S.Description>
      </S.LabelsContainer>

      <S.IconContainer>
        <Icon name="dotsThreeVertical" color={theme.colors.gray[700]} />
      </S.IconContainer>
    </S.Container>
  );
}
