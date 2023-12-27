import React from 'react';
import { ListRenderItemInfo } from 'react-native';

import { FeederDomain } from '@data';

import { EmptyList, FavoriteFeeder } from '..';

import * as Styled from './styles';
import { ListProps } from './types';

export function List({ feeders }: ListProps): React.JSX.Element {
  const renderFeeder = ({ item: feeder }: ListRenderItemInfo<FeederDomain>) => {
    return <FavoriteFeeder feeder={feeder} />;
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
