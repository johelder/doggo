import React from 'react';
import { ListRenderItemInfo } from 'react-native';

import Animated, { FadeInDown } from 'react-native-reanimated';

import { FeederCard } from '@components';
import { FeederDomain } from '@data';

import { EmptyList } from '../EmptyList';

import * as Styled from './styles';
import { ListProps } from './types';
import { useList } from './useList';

export function List({
  isNearFeederListExpanded,
  feeders,
}: ListProps): React.JSX.Element | null {
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
      <Styled.NearFeederContainer
        onPress={() => handleClickOnNearFeeder(feeder.coordinates)}>
        <FeederCard feeder={feeder} />
      </Styled.NearFeederContainer>
    );
  }

  return (
    <Animated.View entering={FadeInDown}>
      <Styled.List
        data={feeders}
        keyExtractor={(feeder: FeederDomain) => feeder.id}
        renderItem={renderNearFeeder}
        showsHorizontalScrollIndicator={false}
      />
    </Animated.View>
  );
}
