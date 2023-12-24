import React from 'react';

import Heart from 'phosphor-react-native/src/icons/Heart';
import { useTheme } from 'styled-components/native';

import { FeederCard } from '@components';
import { useUserIsFeederFavorite, useUserToggleFavoriteFeeder } from '@domain';
import { showToast } from '@utils';

import * as S from './styles';
import { FavoriteFeederProps } from './types';

export function FavoriteFeeder({ feeder }: FavoriteFeederProps): JSX.Element {
  const theme = useTheme();
  const { isFavorite } = useUserIsFeederFavorite({ feederId: feeder.id });
  const { toggleFavoriteFeeder } = useUserToggleFavoriteFeeder(feeder.id, {
    onError: () =>
      showToast({
        type: 'error',
        message: 'Ocorreu um erro ao favoritar, tente novamente mais tarde.',
      }),
  });

  return (
    <S.FeederCardContainer>
      <FeederCard
        feeder={feeder}
        sideButton={
          <S.FavoriteButton onPress={() => toggleFavoriteFeeder(feeder.id)}>
            <Heart
              size={28}
              weight={isFavorite ? 'fill' : 'regular'}
              color={
                isFavorite ? theme.colors.red[500] : theme.colors.gray[700]
              }
            />
          </S.FavoriteButton>
        }
      />
    </S.FeederCardContainer>
  );
}
