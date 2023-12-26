import React from 'react';

import { useTheme } from 'styled-components/native';

import { Icon } from '@components';

import * as S from './styles';
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
    <S.HeaderContainer onPress={handleToggleNearFeederList}>
      <S.Title>Comedouros perto de você</S.Title>

      <Icon
        name={isNearFeederListExpanded ? 'caretDown' : 'caretUp'}
        color={theme.colors.gray[700]}
      />
    </S.HeaderContainer>
  );
}
