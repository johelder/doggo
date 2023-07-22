import React from 'react';
import { useTheme } from 'styled-components';

import CookingPot from 'phosphor-react-native/src/icons/CookingPot';
import MapPin from 'phosphor-react-native/src/icons/MapPin';
import User from 'phosphor-react-native/src/icons/User';
import Signpost from 'phosphor-react-native/src/icons/Signpost';
import Heart from 'phosphor-react-native/src/icons/Heart';

import { Button } from '@src/components';
import { getFoodsLabel } from '@src/utils/getFoodsLabel';
import { useCustomCallout } from './useCustomCallout';
import type { ICustomCalloutProps } from './types';

import * as S from './styles';

export function CustomCallout({ feeder }: ICustomCalloutProps) {
  const { handleOpenDirections, estimatedDistanceUntilTheFeeder } =
    useCustomCallout(feeder);

  const theme = useTheme();

  return (
    <S.Container>
      <S.Content>
        <S.Session>
          <CookingPot color={theme.colors.gray[700]} />

          <S.Title>{getFoodsLabel(feeder?.foods)}</S.Title>
        </S.Session>

        <S.Session>
          <MapPin color={theme.colors.gray[500]} />

          <S.SubTitle>
            {feeder?.address.street}, {feeder?.address.houseNumber},{' '}
            {feeder?.address.neighborhood}, {feeder?.address.city} (≈
            {estimatedDistanceUntilTheFeeder})
          </S.SubTitle>
        </S.Session>

        <S.Session>
          <User color={theme.colors.gray[500]} />

          <S.SubTitle>Comedouro de {feeder?.user.name}</S.SubTitle>
        </S.Session>

        <S.Actions>
          <Button.Root
            type="outline"
            color={theme.colors.gray[700]}
            height={40}
            onPress={() => console.log('press2')}>
            <Button.Icon>
              <Heart color={theme.colors.gray[700]} />
            </Button.Icon>

            <Button.Text color={theme.colors.gray[700]}>Favoritar</Button.Text>
          </Button.Root>

          <Button.Root
            type="outline"
            color={theme.colors.gray[700]}
            height={40}
            onPress={handleOpenDirections}>
            <Button.Icon>
              <Signpost color={theme.colors.gray[700]} />
            </Button.Icon>

            <Button.Text color={theme.colors.gray[700]}>Ver rotas</Button.Text>
          </Button.Root>
        </S.Actions>
      </S.Content>
    </S.Container>
  );
}
