import React from 'react';

import Logo from '@src/assets/images/logo.svg';
import MapIcon from 'phosphor-react-native/src/icons/MapTrifold';
import PinIcon from 'phosphor-react-native/src/icons/MapPin';

import { useTheme } from 'styled-components';

import * as S from './styles';

export function Home(): JSX.Element {
  const theme = useTheme();

  return (
    <S.Container>
      <S.HeaderContainer>
        <Logo />

        <S.HeaderContent>
          <S.HeaderTitle>Bom dia, Johelder</S.HeaderTitle>
          <S.HeaderSubtitle>
            Falta pouco para ajudar animais de rua.
          </S.HeaderSubtitle>
        </S.HeaderContent>
      </S.HeaderContainer>

      <S.MainContainer>
        <S.NavigationButton>
          <S.NavigationButtonContent>
            <S.NavigationButtonTitle>
              Comedouros perto de você
            </S.NavigationButtonTitle>
            <S.NavigationButtonDescription>
              Você pode ajudar reabastecendo comedouros próximos a você
            </S.NavigationButtonDescription>
          </S.NavigationButtonContent>

          <MapIcon size={28} color={theme.colors.secondary[600]} />
        </S.NavigationButton>

        <S.NavigationButton>
          <S.NavigationButtonContent>
            <S.NavigationButtonTitle>
              Cadastre o seu comedouro
            </S.NavigationButtonTitle>
            <S.NavigationButtonDescription>
              Você pode ajudar cadastrando seu comedouro, dessa forma, pessoas
              próximas de você podem reabastecê-lo.
            </S.NavigationButtonDescription>
          </S.NavigationButtonContent>

          <PinIcon size={28} color={theme.colors.secondary[600]} />
        </S.NavigationButton>
      </S.MainContainer>
    </S.Container>
  );
}
