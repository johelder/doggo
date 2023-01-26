import React from 'react';

import DogLandscapeIllustration from '@src/assets/images/dog-landscape-illustration.svg';
import GoogleLogo from '@src/assets/images/google-logo.svg';

import * as S from './styles';

export function SignIn(): JSX.Element {
  return (
    <S.Container>
      <DogLandscapeIllustration width="100%" />

      <S.GreetingsContainer>
        <S.GreetingsTitle>Bem vindo(a) ao Doggo</S.GreetingsTitle>
        <S.GreetingsSubtitle>
          Cadastre e compartilhe seu comedouro ou ajude comedouros públicos
          perto de você!
        </S.GreetingsSubtitle>
      </S.GreetingsContainer>

      <S.GoogleButton>
        <S.GoogleLogoContainer>
          <GoogleLogo />
        </S.GoogleLogoContainer>

        <S.GoogleButtonLabelContainer>
          <S.GoogleButtonLabel>Continuar com o Google</S.GoogleButtonLabel>
        </S.GoogleButtonLabelContainer>
      </S.GoogleButton>
    </S.Container>
  );
}
