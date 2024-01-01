import React from 'react';

import LocationIllustration from '@assets/images/location-illustration.svg';

import * as Styled from './styles';

export function RequestLocationPermissionBanner(): React.JSX.Element {
  return (
    <Styled.Container>
      <Styled.TextsContainer>
        <Styled.Title>Permitir localização</Styled.Title>
        <Styled.Description>
          Nós usamos sua localização para mostrar os comedouros próximos a você.
        </Styled.Description>
      </Styled.TextsContainer>

      <LocationIllustration width="100%" height="50%" />
    </Styled.Container>
  );
}
