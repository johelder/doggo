import React from 'react';

import * as S from './styles';
import { ICustomHeaderTitle } from './types';

export function CustomHeaderTitle({ title, subTitle }: ICustomHeaderTitle) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
    </S.Container>
  );
}
