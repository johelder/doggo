import React from 'react';

import { useTheme } from 'styled-components/native';

import { Icon } from '../Icon';

import * as Styled from './styles';
import { FeederStatusProps } from './types';

export function FeederStatus({
  isNeedMaintenance,
  size = 'md',
  align = 'left',
}: FeederStatusProps): React.JSX.Element {
  const theme = useTheme();

  return (
    <Styled.Container align={align}>
      <Icon
        name={isNeedMaintenance ? 'info' : 'checkCircle'}
        color={theme.colors[isNeedMaintenance ? 'red' : 'green'][500]}
      />
      <Styled.Label isNeedMaintenance={isNeedMaintenance} size={size}>
        {isNeedMaintenance ? 'Precisando de manutenção' : 'Manutenção em dias'}
      </Styled.Label>
    </Styled.Container>
  );
}
