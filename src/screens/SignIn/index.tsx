import React from 'react';

import DogLandscapeIllustration from '@assets/images/dog-landscape-illustration.svg';
import GoogleLogo from '@assets/images/google-logo.svg';

import { Loader } from '@components';
import { useAuth } from '@domain';

import * as Styled from './styles';

export function SignIn(): React.JSX.Element {
  const { handleSignInWithGoogle, isLoadingSignIn } = useAuth();

  return (
    <Styled.Container>
      <DogLandscapeIllustration width="100%" />

      <Styled.GreetingsContainer>
        <Styled.GreetingsTitle>Bem vindo(a) ao Doggo</Styled.GreetingsTitle>
        <Styled.GreetingsSubtitle>
          Cadastre o seu comedouro ou reabasteça comedouros próximos a você e
          faça parte de uma rede de compaixão animal.
        </Styled.GreetingsSubtitle>
      </Styled.GreetingsContainer>

      <Styled.GoogleButton
        testID="google-button"
        onPress={handleSignInWithGoogle}
        disabled={isLoadingSignIn}>
        {isLoadingSignIn ? (
          <Loader.Component />
        ) : (
          <>
            <Styled.GoogleLogoContainer>
              <GoogleLogo />
            </Styled.GoogleLogoContainer>

            <Styled.GoogleButtonLabelContainer>
              <Styled.GoogleButtonLabel>
                Continuar com o Google
              </Styled.GoogleButtonLabel>
            </Styled.GoogleButtonLabelContainer>
          </>
        )}
      </Styled.GoogleButton>
    </Styled.Container>
  );
}
