import React from 'react';

import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import { NavigationButton } from '@components';
import { useAuth } from '@hooks';
import { THomeTabScreenProps } from '@types';

import * as S from './styles';

export function Profile({
  navigation,
}: THomeTabScreenProps<'Profile'>): JSX.Element {
  const { user } = useAuth();
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <S.Container>
      <S.Content tabBarHeight={tabBarHeight}>
        <S.MainContent>
          <S.HeaderContainer>
            <S.ProfilePhotoContainer>
              <S.ProfilePhoto source={{ uri: user?.photo ?? '' }} />
            </S.ProfilePhotoContainer>

            <S.InfoContainer>
              <S.ProfileName>{user?.name}</S.ProfileName>
              <S.ProfileEmail>{user?.email}</S.ProfileEmail>
            </S.InfoContainer>
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

          <NavigationButton
            title="Configurações"
            description="Minhas configurações e informações sobre o app"
            icon={() => <S.ConfigIcon />}
            onPress={() => navigation.navigate('Settings')}
          />
        </S.MainContent>
      </S.Content>
    </S.Container>
  );
}
