import { useRef, useState } from 'react';
import { LayoutChangeEvent } from 'react-native';

import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

export function useInput(value?: string) {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const isInputFilled = useRef(false);

  const placeholderContainerHeight = useRef(0);
  const placeholderPosition = useSharedValue(0);

  function onFocus() {
    setIsInputFocused(true);
    placeholderPosition.value = -placeholderContainerHeight.current;
  }

  function onBlur(inputValue?: string) {
    setIsInputFocused(false);
    isInputFilled.current = !!inputValue;

    if (!isInputFilled.current) {
      placeholderPosition.value = 0;
    }
  }

  function onLayout(event: LayoutChangeEvent) {
    const { height } = event.nativeEvent.layout;

    placeholderContainerHeight.current = height;

    if (value) {
      isInputFilled.current = true;
      placeholderPosition.value = -placeholderContainerHeight.current;
    }
  }

  const animatedPlaceholderPositionStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: placeholderPosition.value }],
    };
  });

  return {
    onLayout,
    animatedPlaceholderPositionStyle,
    placeholderContainerHeight,
    placeholderPosition,
    onFocus,
    onBlur,
    isInputFocused,
  };
}
