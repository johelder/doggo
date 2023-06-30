import React from 'react';

import type { ICustomHeaderTitle } from './types';

import * as S from './styles';

export function CustomHeaderTitle({ title, subTitle }: ICustomHeaderTitle) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
    </S.Container>
  );
}
