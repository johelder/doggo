import React from 'react';
import { useTheme } from 'styled-components/native';

import Check from 'phosphor-react-native/src/icons/Check';

import type { ICheckboxProps } from './types';

import * as S from './styles';

export function Checkbox({ isSelected = false, color }: ICheckboxProps) {
  const theme = useTheme();

  return (
    <S.Container isSelected={isSelected} color={color}>
      {isSelected && <Check size={16} color={theme.colors.utils.white} />}
    </S.Container>
  );
}
