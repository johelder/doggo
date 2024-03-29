import React from 'react';
import { StatusBar } from 'react-native';

import { Loader } from '@components';
import { useFeederFindAll, useFeederFindNearest, useMap } from '@domain';

import {
  Map,
  NearFeederList,
  Tooltip,
  UnavailableLocation,
} from './components';
import * as Styled from './styles';
import { useHome } from './useHome';

export function Home(): React.JSX.Element {
  const {
    isLoadingMap,
    isTooltipVisible,
    setIsTooltipVisible,
    currentFeederOpened,
    handleOpenTooltip,
    isNearFeederListExpanded,
    handleToggleNearFeederList,
  } = useHome();

  const { isLocationAvailable, currentUserLocation } = useMap();

  const { feeders } = useFeederFindAll();
  const { nearFeeders } = useFeederFindNearest(currentUserLocation, feeders);

  if (isLoadingMap) {
    return <Loader.Page />;
  }

  if (!isLocationAvailable) {
    return <UnavailableLocation />;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />

      <Styled.Container>
        <Styled.Content>
          <Map
            feeders={feeders}
            nearFeeders={nearFeeders}
            isNearFeederListExpanded={isNearFeederListExpanded}
            setIsTooltipVisible={setIsTooltipVisible}
            handleOpenTooltip={handleOpenTooltip}
          />
        </Styled.Content>

        <NearFeederList
          feeders={nearFeeders}
          isNearFeederListExpanded={isNearFeederListExpanded}
          handleToggleNearFeederList={handleToggleNearFeederList}
        />

        <Tooltip
          isTooltipVisible={isTooltipVisible}
          setIsTooltipVisible={setIsTooltipVisible}
          currentFeederOpened={currentFeederOpened}
        />
      </Styled.Container>
    </>
  );
}
