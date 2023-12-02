import React from 'react';
import { View } from 'react-native';

import * as S from './styles';
import { IPageAlertProps } from './types';

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
