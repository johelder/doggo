import React, { useCallback } from 'react';
import { ListRenderItemInfo } from 'react-native';

import { useTheme } from 'styled-components';

import DotsThreeVertical from 'phosphor-react-native/src/icons/DotsThreeVertical';

import { FeederCard, Loader } from '@src/components';
import { useMyFeeders } from './useMyFeeders';
import type { IDomainFeeder } from '@src/types/domain';

import * as S from './styles';

export function MyFeeders(): JSX.Element {
  const { feeders, pageStatus } = useMyFeeders();
  const theme = useTheme();

  const renderFeeder = useCallback(
    ({ item: feeder }: ListRenderItemInfo<IDomainFeeder>) => {
      return (
        <FeederCard.ReadOnly
          feeder={feeder}
          sideButton={
            <S.DetailsButton>
              <DotsThreeVertical color={theme.colors.gray[700]} weight="bold" />
            </S.DetailsButton>
          }
        />
      );
    },
    [theme.colors.gray],
  );

  if (pageStatus === 'loading') {
    return <Loader.Page />;
  }

  return (
    <S.Container>
      <S.Content>
        <S.Feeders
          data={feeders}
          keyExtractor={feeder => feeder.id}
          renderItem={renderFeeder}
        />
      </S.Content>
    </S.Container>
  );
}
