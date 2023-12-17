import React from 'react';
import { ListRenderItemInfo } from 'react-native';

import { FeederCard } from '@components';
import { FeederDomain } from '@data';

import { EmptyList } from '../EmptyList';

import * as S from './styles';
import { ListProps } from './types';
import { useList } from './useList';

export function List({
  isNearFeederListExpanded,
  feeders,
}: ListProps): JSX.Element | null {
  const { handleClickOnNearFeeder } = useList();

  if (feeders.length === 0) {
    return <EmptyList />;
  }

  if (!isNearFeederListExpanded) {
    return null;
  }

  function renderNearFeeder({
    item: feeder,
  }: ListRenderItemInfo<FeederDomain>) {
    return (
      <S.NearFeederContainer
        onPress={() => handleClickOnNearFeeder(feeder.coordinates)}>
        <FeederCard feeder={feeder} />
      </S.NearFeederContainer>
    );
  }

  return (
    <S.List
      data={feeders}
      keyExtractor={(feeder: FeederDomain) => feeder.id}
      renderItem={renderNearFeeder}
      showsHorizontalScrollIndicator={false}
    />
  );
}
