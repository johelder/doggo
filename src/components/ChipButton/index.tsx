import React from 'react';

import * as S from './styles';
import { IChipButtonProps } from './types';

export function ChipButton({
  isSelected = false,
  children,
  ...rest
}: IChipButtonProps) {
  return (
    <S.Container isSelected={isSelected} {...rest}>
      {children}
    </S.Container>
  );
}
