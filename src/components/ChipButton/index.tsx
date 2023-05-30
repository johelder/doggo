import React from 'react';

import type { IChipButtonProps } from './types';

import * as S from './styles';

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
