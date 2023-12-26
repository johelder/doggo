import React from 'react';

import { useTheme } from 'styled-components/native';

import { Icon } from '../Icon';

import * as S from './styles';
import { ICheckboxProps } from './types';

export function Checkbox({ isSelected = false, color }: ICheckboxProps) {
  const theme = useTheme();

  return (
    <S.Container isSelected={isSelected} color={color}>
      {isSelected && (
        <Icon name="check" size={16} color={theme.colors.gray[0]} />
      )}
    </S.Container>
  );
}
