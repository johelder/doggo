import React from 'react';

import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components/native';

import { Icon, NavigationButton } from '@components';
import { useAuth } from '@domain';
import { AppTabScreenProps } from '@routes';

import * as Styled from './styles';

export function Profile({
  navigation,
}: AppTabScreenProps<'Profile'>): React.JSX.Element {
  const { user } = useAuth();
  const tabBarHeight = useBottomTabBarHeight();
  const theme = useTheme();

  return (
    <Styled.Container>
      <Styled.Content tabBarHeight={tabBarHeight}>
        <Styled.MainContent>
          <Styled.HeaderContainer>
            <Styled.ProfilePhotoContainer>
              <Styled.ProfilePhoto source={{ uri: user?.photo ?? '' }} />
            </Styled.ProfilePhotoContainer>

            <Styled.InfoContainer>
              <Styled.ProfileName>{user?.name}</Styled.ProfileName>
              <Styled.ProfileEmail>{user?.email}</Styled.ProfileEmail>
            </Styled.InfoContainer>
          </Styled.HeaderContainer>

          <NavigationButton
            title="Novo comedouro"
            description="Cadastre um comedouro"
            icon={() => (
              <Icon name="plusFeeder" color={theme.colors.gray[700]} />
            )}
            onPress={() => navigation.navigate('SelectLocation')}
          />

          <NavigationButton
            title="Meus comedouros"
            description="Minha central de comedouros"
            icon={() => (
              <Icon name="cookingPot" color={theme.colors.gray[700]} />
            )}
            onPress={() => navigation.navigate('MyFeeders')}
          />

          <NavigationButton
            title="Favoritos"
            description="Meus comedouros favoritos"
            icon={() => <Icon name="heart" color={theme.colors.gray[700]} />}
            onPress={() => navigation.navigate('Favorites')}
          />

          <NavigationButton
            title="Configurações"
            description="Minhas configurações e informações sobre o app"
            icon={() => <Icon name="gear" color={theme.colors.gray[700]} />}
            onPress={() => navigation.navigate('Settings')}
          />
        </Styled.MainContent>
      </Styled.Content>
    </Styled.Container>
  );
}
