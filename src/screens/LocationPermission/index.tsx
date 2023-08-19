import React from 'react';

import { Button } from '@src/components';
import { useLocationPermission } from './useLocationPermission';

import LocationIllustration from '@src/assets/images/location-illustration.svg';

import * as S from './styles';

export function LocationPermission() {
  const { handlerRequestUserLocation } = useLocationPermission();

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <LocationIllustration />

          <S.TextsContainer>
            <S.Title>Permitir localização</S.Title>
            <S.Description>
              Nós usamos sua localização para mostrar os comedouros próximos a
              você.
            </S.Description>
          </S.TextsContainer>
        </S.Header>

        <Button.Root type="filled" onPress={handlerRequestUserLocation}>
          <Button.Text>Continuar</Button.Text>
        </Button.Root>
      </S.Content>
    </S.Container>
  );
}
