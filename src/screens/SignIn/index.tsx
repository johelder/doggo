import React from 'react';

import { useAuth } from '@src/hooks';
import { Loader } from '@src/components/Loader';

import DogLandscapeIllustration from '@src/assets/images/dog-landscape-illustration.svg';
import GoogleLogo from '@src/assets/images/google-logo.svg';

import * as S from './styles';

export function SignIn(): JSX.Element {
  const { handleSignInWithGoogle, isLoadingAuth } = useAuth();

  return (
    <S.Container>
      <DogLandscapeIllustration width="100%" />

      <S.GreetingsContainer>
        <S.GreetingsTitle>Bem vindo(a) ao Doggo</S.GreetingsTitle>
        <S.GreetingsSubtitle>
          Cadastre o seu comedouro ou reabasteça comedouros próximos a você e
          faça parte de uma rede de compaixão animal.
        </S.GreetingsSubtitle>
      </S.GreetingsContainer>

      <S.GoogleButton onPress={handleSignInWithGoogle} disabled={isLoadingAuth}>
        {isLoadingAuth ? (
          <Loader.Component />
        ) : (
          <>
            <S.GoogleLogoContainer>
              <GoogleLogo />
            </S.GoogleLogoContainer>

            <S.GoogleButtonLabelContainer>
              <S.GoogleButtonLabel>Continuar com o Google</S.GoogleButtonLabel>
            </S.GoogleButtonLabelContainer>
          </>
        )}
      </S.GoogleButton>
    </S.Container>
  );
}
