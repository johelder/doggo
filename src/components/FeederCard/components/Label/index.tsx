import React from 'react';

import type { ILabelProps } from './types';

import * as S from './styles';

export function Label({ label, isTitle = false }: ILabelProps) {
  return <S.Container isTitle={isTitle}>{label}</S.Container>;
}
