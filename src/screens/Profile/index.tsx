import React from 'react';

import { useAuth } from '@src/hooks';
import { NavigationButton } from '@src/components';
import { ProfileHelper } from './helper';

import UserAvatarPlaceholder from '@src/assets/images/userAvatarPlaceholder.svg';

import * as S from './styles';

export function Profile() {
  const { user } = useAuth();
  const { handleRedirectToConfigurations } = ProfileHelper();

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.ProfilePhotoContainer>
          {user?.photoURL ? (
            <S.ProfilePhoto source={{ uri: user.photoURL }} />
          ) : (
            <UserAvatarPlaceholder />
          )}
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

        <NavigationButton
          title="Configurações"
          description="Minhas configurações de conta"
          icon={() => <S.ConfigurationIcon />}
          onPress={handleRedirectToConfigurations}
        />
      </S.MainContent>
    </S.Container>
  );
}
