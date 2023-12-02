import React from 'react';

import * as S from './styles';
import { IInputProps } from './types';
import { useInput } from './useInput';

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
  } = useInput(value);

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
