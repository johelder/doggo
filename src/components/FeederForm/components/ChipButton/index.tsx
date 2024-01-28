import React from 'react';

import { useTheme } from 'styled-components/native';

import { ChipButton as ChipButtonComponent, Icon } from '@components';

import * as Styled from './styles';
import { ChipButtonProps } from './types';

export function ChipButton({
  isSelected,
  label,
  iconName,
  ...rest
}: ChipButtonProps): React.JSX.Element {
  const theme = useTheme();

  return (
    <Styled.Container>
      <ChipButtonComponent isSelected={isSelected} {...rest}>
        <Icon
          name={iconName}
          color={isSelected ? theme.colors.orange[500] : theme.colors.gray[500]}
        />

        <Styled.Label isSelected={isSelected}>{label}</Styled.Label>
      </ChipButtonComponent>
    </Styled.Container>
  );
}
