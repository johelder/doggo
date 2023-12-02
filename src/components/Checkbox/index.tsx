import React from 'react';

import Check from 'phosphor-react-native/src/icons/Check';
import { useTheme } from 'styled-components/native';

import * as S from './styles';
import { ICheckboxProps } from './types';

export function Checkbox({ isSelected = false, color }: ICheckboxProps) {
  const theme = useTheme();

  return (
    <S.Container isSelected={isSelected} color={color}>
      {isSelected && <Check size={16} color={theme.colors.gray[0]} />}
    </S.Container>
  );
}
