import React from 'react';

import { Input as InputComponent } from '@components';

import * as Styled from './styles';
import { InputProps } from './types';

export function Input({
  flex,
  description,
  ...rest
}: InputProps): React.JSX.Element {
  return (
    <Styled.Container flex={flex}>
      <InputComponent {...rest} />

      {description && (
        <Styled.FieldDescription>Apto / Bloco / Casa</Styled.FieldDescription>
      )}
    </Styled.Container>
  );
}
