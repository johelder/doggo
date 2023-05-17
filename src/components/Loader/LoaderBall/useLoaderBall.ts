import { useEffect } from 'react';

import { useTheme } from 'styled-components';
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export function useLoaderBall(initialDelay: number) {
  const ball = useSharedValue(0);
  const theme = useTheme();

  const animatedBallStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        ball.value,
        [0, 1],
        [theme.colors.primary[200], theme.colors.primary[500]],
      ),
    };
  });

  useEffect(() => {
    ball.value = withDelay(
      initialDelay,
      withRepeat(
        withTiming(1, {
          duration: 1000,
        }),
        -1,
        false,
      ),
    );
  }, [ball, initialDelay]);

  return { animatedBallStyle };
}
