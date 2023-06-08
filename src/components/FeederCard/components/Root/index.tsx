import React from 'react';

import type { IRootProps } from './types';

import * as S from './styles';

export function Root({ children }: IRootProps) {
  return <S.Container>{children}</S.Container>;
}
