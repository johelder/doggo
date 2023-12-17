import { useCallback, useEffect, useState } from 'react';

import Geolocation from '@react-native-community/geolocation';
import { useIsFocused } from '@react-navigation/native';

import { FeederDomain } from '@data';
import { useMap } from '@hooks';
import { delay } from '@utils';

export function useHome() {
  const [isLoadingMap, setIsLoadingMap] = useState(true);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isNearFeederListExpanded, setIsNearFeederListExpanded] =
    useState(true);
  const [currentFeederOpened, setCurrentFeederOpened] =
    useState<FeederDomain | null>(null);

  const { getUserCurrentPosition, watchUserPosition } = useMap();

  const isScreenFocused = useIsFocused();

  function handleToggleNearFeederList() {
    setIsNearFeederListExpanded(prevState => !prevState);
  }

  function handleOpenTooltip(feeder: FeederDomain) {
    setIsTooltipVisible(true);
    setCurrentFeederOpened(feeder);
  }

  const initialDelay = useCallback(async () => {
    setIsLoadingMap(true);

    await delay(1000);

    setIsLoadingMap(false);
  }, []);

  useEffect(() => {
    if (isScreenFocused) {
      getUserCurrentPosition();
    }

    const watchId = watchUserPosition();

    return () => Geolocation.clearWatch(watchId);
  }, [getUserCurrentPosition, isScreenFocused, watchUserPosition]);

  useEffect(() => {
    initialDelay();
  }, [initialDelay]);

  return {
    isLoadingMap,
    isTooltipVisible,
    setIsTooltipVisible,
    currentFeederOpened,
    handleOpenTooltip,
    isNearFeederListExpanded,
    handleToggleNearFeederList,
  };
}
