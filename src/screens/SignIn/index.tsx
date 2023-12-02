import React from 'react';

import DogLandscapeIllustration from '@assets/images/dog-landscape-illustration.svg';
import GoogleLogo from '@assets/images/google-logo.svg';

import { Loader } from '@components';
import { useAuth } from '@hooks';

import * as S from './styles';

export function SignIn(): JSX.Element {
  const { handleSignInWithGoogle, isLoadingSignIn } = useAuth();

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

      <S.GoogleButton
        onPress={handleSignInWithGoogle}
        disabled={isLoadingSignIn}>
        {isLoadingSignIn ? (
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
