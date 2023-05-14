import React from 'react';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import { useAuth } from '@src/hooks';
import { NavigationButton } from '@src/components';

import * as S from './styles';

export function Profile() {
  const { user } = useAuth();
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <S.Container>
      <S.Content tabBarHeight={tabBarHeight}>
        <S.HeaderContainer>
          <S.ProfilePhotoContainer>
            <S.ProfilePhoto source={{ uri: user?.photoURL ?? '' }} />
          </S.ProfilePhotoContainer>

          <S.ProfileName>{user?.displayName}</S.ProfileName>
        </S.HeaderContainer>

        <S.MainContent>
          <NavigationButton
            title="Comedouros"
            description="Minha central de comedouros"
            icon={() => <S.FeederIcon />}
          />

          <NavigationButton
            title="Favoritos"
            description="Meus comedouros favoritos"
            icon={() => <S.FavoriteIcon />}
          />
        </S.MainContent>
      </S.Content>
    </S.Container>
  );
}
