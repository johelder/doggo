import React from 'react';

import type { IActionButtonProps } from './types';

import * as S from './styles';

export function ActionButton({ children }: IActionButtonProps) {
  return <S.Container>{children}</S.Container>;
}
