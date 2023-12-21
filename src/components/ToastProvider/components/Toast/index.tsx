import React from 'react';

import { GestureDetector } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';

import * as S from './styles';
import { IToastProps } from './types';
import { useToast } from './useToast';

export function Toast({ isVisible, toast, onRemove }: IToastProps) {
  const { getToastIcon, animatedStyle, handleRemove, swipeUpGesture } =
    useToast({
      isVisible,
      toast,
      onRemove,
    });
  const theme = useTheme();

  const Icon = getToastIcon(toast?.type);

  if (!toast) {
    return null;
  }

  return (
    <GestureDetector gesture={swipeUpGesture}>
      <S.Content type={toast.type} style={[animatedStyle]}>
        <S.IconContainer>
          {Icon && <Icon color={theme.colors.gray[0]} />}
        </S.IconContainer>

        <S.Message>{toast.message}</S.Message>

        <S.CloseButton onPress={handleRemove}>
          <S.CloseIcon color={theme.colors.gray[0]} />
        </S.CloseButton>
      </S.Content>
    </GestureDetector>
  );
}
