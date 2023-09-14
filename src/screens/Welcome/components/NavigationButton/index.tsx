import React from 'react';

import type { INavigationButtonProps } from './types';

import * as S from './styles';

export function NavigationButton({
  title,
  description,
  icon,
  ...rest
}: INavigationButtonProps) {
  return (
    <S.Container {...rest}>
      <S.TextsContainer>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.TextsContainer>

      {icon}
    </S.Container>
  );
}
