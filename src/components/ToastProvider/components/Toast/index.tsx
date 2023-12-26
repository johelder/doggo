import React from 'react';

import { GestureDetector } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';

import { Icon } from '@components';

import * as S from './styles';
import { ToastProps } from './types';
import { toastIconMapper, useToast } from './useToast';

export function Toast({ isVisible, toast, onRemove }: ToastProps) {
  const { animatedStyle, handleRemove, swipeUpGesture } = useToast({
    isVisible,
    toast,
    onRemove,
  });
  const theme = useTheme();

  if (!toast) {
    return null;
  }

  return (
    <GestureDetector gesture={swipeUpGesture}>
      <S.Content type={toast.type} style={[animatedStyle]}>
        <Icon name={toastIconMapper[toast.type]} color={theme.colors.gray[0]} />

        <S.Message>{toast.message}</S.Message>

        <Icon name="x" color={theme.colors.gray[0]} onPress={handleRemove} />
      </S.Content>
    </GestureDetector>
  );
}
