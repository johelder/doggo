import { Dispatch, SetStateAction, useCallback, useEffect } from 'react';

import {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {
  SPLASH_ANIMATION_FINAL_VALUE,
  TIME_TO_LOAD_AUTH_STATE,
} from './constants';

export function useSplash(
  setIsLoadingAuthState: Dispatch<SetStateAction<boolean>>,
) {
  const splashAnimation = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, 0.3, 1]),
    };
  });

  const onFinishedAuthStateLoad = useCallback(() => {
    setIsLoadingAuthState(false);
  }, [setIsLoadingAuthState]);

  useEffect(() => {
    splashAnimation.value = withTiming(
      SPLASH_ANIMATION_FINAL_VALUE,
      { duration: TIME_TO_LOAD_AUTH_STATE },
      () => {
        runOnJS(onFinishedAuthStateLoad)();
      },
    );
  }, [onFinishedAuthStateLoad, setIsLoadingAuthState, splashAnimation]);

  return { animatedStyles };
}
