import React from 'react';

import { Icon } from '../Icon';

import * as S from './styles';
import { INavigationButtonProps } from './types';

export function NavigationButton({
  title,
  description,
  icon: IconComponent,
  ...rest
}: INavigationButtonProps) {
  return (
    <S.Container {...rest}>
      <S.Content>
        {IconComponent && <IconComponent />}

        <S.TitlesContainer>
          <S.Title>{title}</S.Title>
          {description && <S.Description>{description}</S.Description>}
        </S.TitlesContainer>
      </S.Content>

      <Icon name="caretRight" />
    </S.Container>
  );
}
