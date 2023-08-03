import React from 'react';
import { useTheme } from 'styled-components';

import Check from 'phosphor-react-native/src/icons/Check';

import type { ICheckboxProps } from './types';

import * as S from './styles';

export function Checkbox({ isSelected = false }: ICheckboxProps) {
  const theme = useTheme();

  return (
    <S.Container isSelected={isSelected}>
      {isSelected && <Check color={theme.colors.utils.white} />}
    </S.Container>
  );
}
