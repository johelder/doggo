import React from 'react';

import * as S from './styles';
import { CustomHeaderTitleProps } from './types';

export function CustomHeaderTitle({ title, subTitle }: CustomHeaderTitleProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
    </S.Container>
  );
}
