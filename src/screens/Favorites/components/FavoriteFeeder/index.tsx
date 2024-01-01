import React from 'react';

import { useTheme } from 'styled-components/native';

import { FeederCard, Icon } from '@components';
import { useUserIsFeederFavorite, useUserToggleFavoriteFeeder } from '@domain';
import { showToast } from '@utils';

import * as Styled from './styles';
import { FavoriteFeederProps } from './types';

export function FavoriteFeeder({
  feeder,
}: FavoriteFeederProps): React.JSX.Element {
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
    <Styled.FeederCardContainer>
      <FeederCard
        feeder={feeder}
        sideButton={
          <Styled.FavoriteButton
            onPress={() => toggleFavoriteFeeder(feeder.id)}>
            <Icon
              name={isFavorite ? 'heartFilled' : 'heart'}
              size={28}
              color={
                isFavorite ? theme.colors.red[500] : theme.colors.gray[700]
              }
            />
          </Styled.FavoriteButton>
        }
      />
    </Styled.FeederCardContainer>
  );
}
