import React from 'react';

import type { ILabelProps } from './types';

import * as S from './styles';

export function Label({ label, isTitle = false, ...rest }: ILabelProps) {
  return (
    <S.Container isTitle={isTitle} {...rest}>
      {label}
    </S.Container>
  );
}
