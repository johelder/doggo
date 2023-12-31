import React from 'react';

import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import { List, Header } from './components';
import * as Styled from './styles';
import { NearFeederListProps } from './types';

export function NearFeederList({
  feeders,
  isNearFeederListExpanded,
  handleToggleNearFeederList,
}: NearFeederListProps): React.JSX.Element {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <Styled.NearFeedersContainer tabBarHeight={tabBarHeight}>
      <Header
        isVisible={feeders.length > 0}
        isNearFeederListExpanded={isNearFeederListExpanded}
        handleToggleNearFeederList={handleToggleNearFeederList}
      />

      <List
        feeders={feeders}
        isNearFeederListExpanded={isNearFeederListExpanded}
      />
    </Styled.NearFeedersContainer>
  );
}
