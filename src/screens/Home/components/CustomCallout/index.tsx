import React from 'react';
import { useTheme } from 'styled-components';

import CookingPot from 'phosphor-react-native/src/icons/CookingPot';
import MapPin from 'phosphor-react-native/src/icons/MapPin';
import User from 'phosphor-react-native/src/icons/User';

import { getFoodsLabel } from '@src/utils/getFoodsLabel';
import { ICustomCalloutProps } from './types';

import * as S from './styles';

export function CustomCallout({ feeder }: ICustomCalloutProps) {
  const { street, houseNumber, neighborhood, city } = feeder.address;
  const theme = useTheme();

  return (
    <S.Container>
      <S.Content>
        <S.Session>
          <CookingPot color={theme.colors.gray[700]} />

          <S.Title>{getFoodsLabel(feeder.foods)}</S.Title>
        </S.Session>

        <S.Session>
          <MapPin color={theme.colors.gray[500]} />

          <S.SubTitle>
            {street}, {houseNumber}, {neighborhood}, {city}
          </S.SubTitle>
        </S.Session>

        <S.Session>
          <User color={theme.colors.gray[500]} />

          <S.SubTitle>Comedouro de {feeder.user.name}</S.SubTitle>
        </S.Session>
      </S.Content>
    </S.Container>
  );
}
