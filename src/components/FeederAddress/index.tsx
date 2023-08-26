import React from 'react';

import { useTheme } from 'styled-components';

import MapPin from 'phosphor-react-native/src/icons/MapPin';
import DotsThreeVertical from 'phosphor-react-native/src/icons/DotsThreeVertical';

import { getFoodsLabel } from '@src/utils/getFoodsLabel';

import type { IFeederAddressProps } from './types';

import * as S from './styles';

export function FeederAddress({ feeder, onOpenDetails }: IFeederAddressProps) {
  const { street, houseNumber, neighborhood, city } = feeder.address;
  const theme = useTheme();

  return (
    <S.Container onPress={onOpenDetails}>
      <MapPin weight="fill" color={theme.colors.primary[500]} />

      <S.LabelsContainer>
        <S.Title>
          {street}, {houseNumber}, {neighborhood} - {city}
        </S.Title>
        <S.Description>{getFoodsLabel(feeder.foods)}</S.Description>
      </S.LabelsContainer>

      <S.IconContainer>
        <DotsThreeVertical color={theme.colors.gray[700]} weight="bold" />
      </S.IconContainer>
    </S.Container>
  );
}
