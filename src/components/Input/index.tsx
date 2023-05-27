import React from 'react';

import { useInput } from './useInput';
import { IInputProps } from './types';

import * as S from './styles';

export function Input({ placeholder, value, ...rest }: IInputProps) {
  const {
    onLayout,
    animatedPlaceholderPositionStyle,
    onFocus,
    onBlur,
    isInputFocused,
  } = useInput();

  return (
    <S.Container isInputFocused={isInputFocused}>
      <S.AnimatedPlaceholderContainer
        onLayout={onLayout}
        style={animatedPlaceholderPositionStyle}>
        <S.Placeholder>{placeholder}</S.Placeholder>
      </S.AnimatedPlaceholderContainer>

      <S.Input
        value={value}
        onFocus={onFocus}
        onBlur={() => onBlur(value)}
        {...rest}
      />
    </S.Container>
  );
}
