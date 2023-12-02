import React from 'react';

import DotsThreeVertical from 'phosphor-react-native/src/icons/DotsThreeVertical';
import MapPin from 'phosphor-react-native/src/icons/MapPin';
import { useTheme } from 'styled-components/native';

import { getFoodsLabel } from '@utils';

import * as S from './styles';
import { IFeederAddressProps } from './types';

export function FeederAddress({ feeder, onOpenDetails }: IFeederAddressProps) {
  const { street, houseNumber, neighborhood, city } = feeder.address;
  const theme = useTheme();

  return (
    <S.Container onPress={onOpenDetails}>
      <MapPin weight="fill" color={theme.colors.orange[500]} />

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
