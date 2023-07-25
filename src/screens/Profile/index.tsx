import React from 'react';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';

import { useAuth } from '@src/hooks';
import { Button, NavigationButton } from '@src/components';

import type { TProfileProps } from './types';

import * as S from './styles';

export function Profile({ navigation }: TProfileProps): JSX.Element {
  const { user, handleSignOut } = useAuth();
  const tabBarHeight = useBottomTabBarHeight();
  const theme = useTheme();

  return (
    <S.Container>
      <S.Content tabBarHeight={tabBarHeight}>
        <S.MainContent>
          <S.HeaderContainer>
            <S.ProfilePhotoContainer>
              <S.ProfilePhoto source={{ uri: user?.photo ?? '' }} />
            </S.ProfilePhotoContainer>

            <S.ProfileName>{user?.name}</S.ProfileName>
          </S.HeaderContainer>

          <NavigationButton
            title="Novo comedouro"
            description="Cadastre um comedouro"
            icon={() => <S.SelectLocation />}
            onPress={() => navigation.navigate('SelectLocation')}
          />

          <NavigationButton
            title="Meus comedouros"
            description="Minha central de comedouros"
            icon={() => <S.FeederIcon />}
            onPress={() => navigation.navigate('MyFeeders')}
          />

          <NavigationButton
            title="Favoritos"
            description="Meus comedouros favoritos"
            icon={() => <S.FavoriteIcon />}
            onPress={() => navigation.navigate('Favorites')}
          />
        </S.MainContent>

        <S.ButtonContainer>
          <Button.Root
            type="outline"
            color={theme.colors.gray[200]}
            onPress={handleSignOut}>
            <Button.Icon>
              <S.SignOutIcon />
            </Button.Icon>

            <Button.Text color={theme.colors.gray[700]}>Sair</Button.Text>
          </Button.Root>
        </S.ButtonContainer>
      </S.Content>
    </S.Container>
  );
}
