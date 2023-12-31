import React from 'react';

import { useTheme } from 'styled-components/native';

import { Icon } from '@components';

import * as Styled from './styles';
import { HeaderProps } from './types';

export function Header({
  isVisible,
  isNearFeederListExpanded,
  handleToggleNearFeederList,
}: HeaderProps): React.JSX.Element | null {
  const theme = useTheme();

  if (!isVisible) {
    return null;
  }

  return (
    <Styled.HeaderContainer onPress={handleToggleNearFeederList}>
      <Styled.Title>Comedouros perto de você</Styled.Title>

      <Icon
        name={isNearFeederListExpanded ? 'caretDown' : 'caretUp'}
        color={theme.colors.gray[700]}
      />
    </Styled.HeaderContainer>
  );
}
