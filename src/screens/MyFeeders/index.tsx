import React from 'react';

import { useTheme } from 'styled-components';

import DotsThreeVertical from 'phosphor-react-native/src/icons/DotsThreeVertical';

import { FeederCard } from '@src/components';

import * as S from './styles';

export function MyFeeders(): JSX.Element {
  const theme = useTheme();

  return (
    <S.Container>
      <S.Content>
        <FeederCard
          sideButton={
            <S.DetailsButton>
              <DotsThreeVertical color={theme.colors.gray[700]} weight="bold" />
            </S.DetailsButton>
          }
        />
      </S.Content>
    </S.Container>
  );
}
