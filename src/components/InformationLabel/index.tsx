import React from 'react';

import { useTheme } from 'styled-components/native';

import { Icon } from '../Icon';

import * as Styled from './styles';
import { InformationLabelProps } from './types';

export function InformationLabel({
  iconName,
  label,
  size = 'md',
  color,
}: InformationLabelProps): React.JSX.Element {
  const theme = useTheme();

  return (
    <Styled.Container>
      {iconName && (
        <Icon name={iconName} color={color ?? theme.colors.gray[500]} />
      )}
      <Styled.Label color={color} size={size}>
        {label}
      </Styled.Label>
    </Styled.Container>
  );
}
