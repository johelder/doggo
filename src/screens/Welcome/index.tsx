import React from 'react';
import { useTheme } from 'styled-components';

import MapPinLine from 'phosphor-react-native/src/icons/MapPinLine';
import CirclesThreePlus from 'phosphor-react-native/src/icons/CirclesThreePlus';

import { useAuth } from '@src/hooks';
import { getDayGreetings } from '@src/utils';
import { NavigationButton } from './components/NavigationButton';

import type { IWelcomeProps } from './types';

import * as S from './styles';

export function Welcome({ navigation }: IWelcomeProps): JSX.Element {
  const { user } = useAuth();
  const theme = useTheme();

  return (
    <S.Container>
      <S.Content>
        <S.TextsContainer>
          <S.HeaderTitle>{`${getDayGreetings(new Date().getHours())}, ${
            user?.name
          }`}</S.HeaderTitle>

          <S.Description>Falta pouco para ajudar animais de rua.</S.Description>
        </S.TextsContainer>

        <S.Title>Escolha uma opção:</S.Title>

        <S.ButtonsContainer>
          <NavigationButton
            title="Comedouros perto de você"
            description="Você pode ajudar reabastecendo ou limpando comedouros próximos a você."
            icon={<MapPinLine size={32} color={theme.colors.secondary[600]} />}
            onPress={() => navigation.navigate('HomeTabs', { screen: 'Map' })}
          />
          <NavigationButton
            title="Cadastre o seu comedouro"
            description="Você pode ajudar cadastrando seu comedouro, dessa forma, pessoas próximas de você podem limpá-lo ou reabastecê-lo."
            icon={
              <CirclesThreePlus size={32} color={theme.colors.secondary[600]} />
            }
            onPress={() => navigation.navigate('SelectLocation')}
          />
        </S.ButtonsContainer>
      </S.Content>
    </S.Container>
  );
}
