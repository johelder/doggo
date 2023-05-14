import React from 'react';

import { INavigationButtonProps } from './types';

import * as S from './styles';

export function NavigationButton({
  title,
  description,
  icon: IconComponent,
}: INavigationButtonProps) {
  return (
    <S.Container>
      <S.Content>
        <IconComponent />
        <S.TitlesContainer>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.TitlesContainer>
      </S.Content>

      <S.ArrowRight />
    </S.Container>
  );
}
