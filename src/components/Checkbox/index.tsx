import React from 'react';

import { useTheme } from 'styled-components/native';

import { Icon } from '../Icon';

import * as Styled from './styles';
import { CheckboxProps } from './types';

export function Checkbox({
  isSelected = false,
  color,
}: CheckboxProps): React.JSX.Element {
  const theme = useTheme();

  return (
    <Styled.Container isSelected={isSelected} color={color}>
      {isSelected && (
        <Icon name="check" size={16} color={theme.colors.gray[0]} />
      )}
    </Styled.Container>
  );
}
