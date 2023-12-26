import { useCallback, useEffect } from 'react';

import { Gesture } from 'react-native-gesture-handler';
import {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { IconProps } from '@components';

import { Toast } from '../../types';

import {
  DEFAULT_TOAST_DURATION,
  INITIAL_HIDDEN_TOAST_VALUE,
  UNMOUNT_ANIMATION_DURATION,
  VISIBLE_TOAST_VALUE,
} from './constants';
import { ToastProps } from './types';

export const toastIconMapper: Record<Toast['type'], IconProps['name']> = {
  success: 'checkCircle',
  error: 'warningCircle',
  warning: 'info',
};

export function useToast({ isVisible, toast, onRemove }: ToastProps) {
  const positionY = useSharedValue(INITIAL_HIDDEN_TOAST_VALUE);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withSpring(positionY.value) }],
    };
  });

  if (isVisible) {
    positionY.value = VISIBLE_TOAST_VALUE;
  }

  const handleRemove = useCallback(() => {
    positionY.value = withTiming(
      INITIAL_HIDDEN_TOAST_VALUE,
      { duration: UNMOUNT_ANIMATION_DURATION },
      () => {
        runOnJS(onRemove)();
      },
    );
  }, [onRemove, positionY]);

  const swipeUpGesture = Gesture.Pan().onTouchesUp(() =>
    runOnJS(handleRemove)(),
  );

  useEffect(() => {
    const toastTimeout = setTimeout(
      handleRemove,
      toast?.duration || DEFAULT_TOAST_DURATION,
    );

    return () => clearTimeout(toastTimeout);
  }, [handleRemove, toast?.duration]);

  return { animatedStyle, handleRemove, swipeUpGesture };
}
