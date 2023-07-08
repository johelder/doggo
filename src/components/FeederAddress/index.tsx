import React from 'react';

import { useTheme } from 'styled-components';

import MapPin from 'phosphor-react-native/src/icons/MapPin';
import DotsThreeVertical from 'phosphor-react-native/src/icons/DotsThreeVertical';

import { useFeederAddress } from './useFeederAddress';
import type { IFeederAddressProps } from './types';

import * as S from './styles';

export function FeederAddress({ feeder, onOpenDetails }: IFeederAddressProps) {
  const { street, houseNumber, neighborhood, city } = feeder.address;
  const { getFoodsLabel } = useFeederAddress();
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

      <DotsThreeVertical color={theme.colors.gray[700]} weight="bold" />
    </S.Container>
  );
}
