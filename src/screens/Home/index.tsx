import React from 'react';
import { StatusBar } from 'react-native';

import { Loader } from '@components';
import { useFeederFindAll, useFeederFindNearest } from '@domain';
import { useMap } from '@hooks';

import {
  Map,
  NearFeederList,
  Tooltip,
  UnavailableLocation,
} from './components';
import * as S from './styles';
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

      <S.Container>
        <S.Content>
          <Map
            feeders={feeders}
            nearFeeders={nearFeeders}
            isNearFeederListExpanded={isNearFeederListExpanded}
            setIsTooltipVisible={setIsTooltipVisible}
            handleOpenTooltip={handleOpenTooltip}
          />
        </S.Content>

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
      </S.Container>
    </>
  );
}
