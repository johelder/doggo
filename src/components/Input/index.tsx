import React from 'react';

import * as Styled from './styles';
import { InputProps } from './types';
import { useInput } from './useInput';

export function Input({
  placeholder,
  value,
  isOptional = false,
  ...rest
}: InputProps): React.JSX.Element {
  const {
    onLayout,
    animatedPlaceholderPositionStyle,
    onFocus,
    onBlur,
    isInputFocused,
  } = useInput(value);

  return (
    <Styled.Container isInputFocused={isInputFocused}>
      <Styled.AnimatedPlaceholderContainer
        onLayout={onLayout}
        style={animatedPlaceholderPositionStyle}>
        <Styled.Placeholder>{placeholder}</Styled.Placeholder>

        {isOptional && <Styled.OptionalLabel>(Opcional)</Styled.OptionalLabel>}
      </Styled.AnimatedPlaceholderContainer>

      <Styled.Input
        value={value}
        onFocus={onFocus}
        onBlur={() => onBlur(value)}
        {...rest}
      />
    </Styled.Container>
  );
}
