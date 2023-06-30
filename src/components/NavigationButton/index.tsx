import React from 'react';

import type { INavigationButtonProps } from './types';

import * as S from './styles';

export function NavigationButton({
  title,
  description,
  icon: IconComponent,
  ...rest
}: INavigationButtonProps) {
  return (
    <S.Container {...rest}>
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
