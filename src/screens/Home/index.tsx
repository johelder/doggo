import React from 'react';

import Logo from '@src/assets/images/logo.svg';

import * as S from './styles';

export function Home(): JSX.Element {
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
        <S.RedirectButton>
          <S.RedirectButtonContent>
            <S.RedirectButtonTitle>
              Comedouros perto de você
            </S.RedirectButtonTitle>
            <S.RedirectButtonDescription>
              Você pode ajudar reabastecendo comedouros próximos a você.
            </S.RedirectButtonDescription>
          </S.RedirectButtonContent>

          <S.NearbyFeederIcon />
        </S.RedirectButton>

        <S.RedirectButton>
          <S.RedirectButtonContent>
            <S.RedirectButtonTitle>
              Cadastre o seu comedouro
            </S.RedirectButtonTitle>
            <S.RedirectButtonDescription>
              Você pode ajudar cadastrando seu comedouro, dessa forma, pessoas
              próximas de você podem reabastecê-lo.
            </S.RedirectButtonDescription>
          </S.RedirectButtonContent>

          <S.CreateFeederIcon />
        </S.RedirectButton>
      </S.MainContainer>
    </S.Container>
  );
}
