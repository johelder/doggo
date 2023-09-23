import React from 'react';

import LocationIllustration from '@assets/images/location-illustration.svg';

import * as S from './styles';

export function RequestLocationPermissionBanner() {
  return (
    <S.Container>
      <S.TextsContainer>
        <S.Title>Permitir localização</S.Title>
        <S.Description>
          Nós usamos sua localização para mostrar os comedouros próximos a você.
        </S.Description>
      </S.TextsContainer>

      <LocationIllustration width="100%" height="50%" />
    </S.Container>
  );
}
