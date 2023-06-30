import React from 'react';

import { useInput } from './useInput';
import type { IInputProps } from './types';

import * as S from './styles';

export function Input({
  placeholder,
  value,
  isOptional = false,
  ...rest
}: IInputProps) {
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

        {isOptional && <S.OptionalLabel>(Opcional)</S.OptionalLabel>}
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
