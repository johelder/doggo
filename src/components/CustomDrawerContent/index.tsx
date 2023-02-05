import React from 'react';

import {
  DrawerContentComponentProps,
  DrawerItemList,
} from '@react-navigation/drawer';

import { useTheme } from 'styled-components';
import { useAuth } from '@src/hooks';

import { Button } from '@src/components';

import UserAvatarPlaceholder from '@src/assets/images/userAvatarPlaceholder.svg';

import * as S from './styles';

export function CustomDrawerContent({
  navigation,
  ...rest
}: DrawerContentComponentProps) {
  const theme = useTheme();
  const { user, handleSignOut } = useAuth();

  return (
    <S.Container {...rest}>
      <S.MainContent>
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

        <DrawerItemList {...{ navigation, ...rest }} />
      </S.MainContent>

      <Button.Root
        type="outline"
        color={theme.colors.gray[200]}
        onPress={handleSignOut}>
        <Button.Icon>
          <S.LogoutIcon />
        </Button.Icon>

        <Button.Text color={theme.colors.gray[700]}>Sair</Button.Text>
      </Button.Root>
    </S.Container>
  );
}
