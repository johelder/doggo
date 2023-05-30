import React from 'react';

import { useTheme } from 'styled-components';

import { useToast } from './useToast';
import { IToastProps } from './types';

import * as S from './styles';

export function Toast({ isVisible, toast, onRemove }: IToastProps) {
  const { getToastIcon, animatedStyle, handleRemove } = useToast({
    isVisible,
    toast,
    onRemove,
  });
  const theme = useTheme();

  const Icon = getToastIcon(toast?.type);

  return (
    <S.Container style={[animatedStyle]}>
      <S.Content type={toast?.type}>
        <S.IconContainer>
          {Icon && <Icon color={theme.colors.utils.white} />}
        </S.IconContainer>

        <S.Message>{toast?.message}</S.Message>

        <S.CloseButton onPress={handleRemove}>
          <S.CloseIcon color={theme.colors.utils.white} />
        </S.CloseButton>
      </S.Content>
    </S.Container>
  );
}
