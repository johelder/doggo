import React from 'react';
import { ListRenderItemInfo } from 'react-native';

import Animated, { FadeInUp } from 'react-native-reanimated';

import { FeederDomain } from '@data';

import { EmptyList, FavoriteFeeder } from '..';

import * as Styled from './styles';
import { ListProps } from './types';

export function List({ feeders }: ListProps): React.JSX.Element {
  const renderFeeder = ({ item: feeder }: ListRenderItemInfo<FeederDomain>) => {
    return (
      <Animated.View entering={FadeInUp}>
        <FavoriteFeeder feeder={feeder} />
      </Animated.View>
    );
  };

  return (
    <Styled.Feeders
      data={feeders}
      keyExtractor={(feeder: FeederDomain) => feeder.id}
      renderItem={renderFeeder}
      ListEmptyComponent={EmptyList}
    />
  );
}
