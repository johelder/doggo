import { useCallback, useEffect } from 'react';

import {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import CheckCircle from 'phosphor-react-native/src/icons/CheckCircle';
import WarningCircle from 'phosphor-react-native/src/icons/WarningCircle';

import {
  DEFAULT_TOAST_DURATION,
  INITIAL_HIDDEN_TOAST_VALUE,
  UNMOUNT_ANIMATION_DURATION,
  VISIBLE_TOAST_VALUE,
} from './constants';
import type { TToastType } from '../../types';
import type { IToastProps } from './types';

const toastIconMapper = {
  success: CheckCircle,
  error: WarningCircle,
  warning: WarningCircle,
};

export function useToast({ isVisible, toast, onRemove }: IToastProps) {
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

  useEffect(() => {
    const toastTimeout = setTimeout(
      handleRemove,
      toast?.duration ?? DEFAULT_TOAST_DURATION,
    );

    return () => clearTimeout(toastTimeout);
  }, [handleRemove, toast?.duration]);

  function getToastIcon(type: TToastType) {
    if (!type) {
      return null;
    }

    return toastIconMapper[type];
  }

  return { getToastIcon, animatedStyle, handleRemove };
}