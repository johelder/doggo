import { useEffect } from 'react';
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';

import {
  ANIMATION_DURATION,
  INPUT_RANGE,
  IS_ANIMATED_INFINITE,
  OUTPUT_RANGE,
  IS_REVERSE_ANIMATION,
  INITIAL_ANIMATION_VALUE,
  FINAL_ANIMATION_VALUE,
} from './constants';

export function useLoaderBall(initialDelay: number) {
  const ball = useSharedValue(INITIAL_ANIMATION_VALUE);
  const theme = useTheme();

  const animatedBallStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        ball.value,
        [INPUT_RANGE, OUTPUT_RANGE],
        [theme.colors.primary[200], theme.colors.primary[500]],
      ),
    };
  });

  useEffect(() => {
    ball.value = withDelay(
      initialDelay,
      withRepeat(
        withTiming(FINAL_ANIMATION_VALUE, {
          duration: ANIMATION_DURATION,
        }),
        IS_ANIMATED_INFINITE,
        IS_REVERSE_ANIMATION,
      ),
    );
  }, [ball, initialDelay]);

  return { animatedBallStyle };
}
