import React from 'react';

import CaretDown from 'phosphor-react-native/src/icons/CaretDown';
import CaretUp from 'phosphor-react-native/src/icons/CaretUp';
import { useTheme } from 'styled-components/native';

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

      {isNearFeederListExpanded ? (
        <CaretDown weight="bold" color={theme.colors.gray[700]} />
      ) : (
        <CaretUp weight="bold" color={theme.colors.gray[700]} />
      )}
    </S.HeaderContainer>
  );
}
