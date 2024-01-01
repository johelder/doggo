import React from 'react';

import * as Styled from './styles';
import { ChipButtonProps } from './types';

export function ChipButton({
  isSelected = false,
  children,
  ...rest
}: ChipButtonProps): React.JSX.Element {
  return (
    <Styled.Container isSelected={isSelected} {...rest}>
      {children}
    </Styled.Container>
  );
}
