import React from 'react';
import { View } from 'react-native';

import type { IPageAlertProps } from './types';

import * as S from './styles';

export function PageAlert({
  title,
  description,
  icon,
  color,
  actionButton,
}: IPageAlertProps) {
  return (
    <S.Container>
      <S.IconContainer color={color}>{icon}</S.IconContainer>

      <View>
        <S.Title>{title}</S.Title>
        {description && <S.Description>{description}</S.Description>}
      </View>

      {actionButton}
    </S.Container>
  );
}
