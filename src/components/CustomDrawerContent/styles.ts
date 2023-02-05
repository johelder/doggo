import styled from 'styled-components/native';

import SignOut from 'phosphor-react-native/src/icons/SignOut';

import { DrawerContentScrollView } from '@react-navigation/drawer';

export const Container = styled(DrawerContentScrollView).attrs({
  contentContainerStyle: {
    height: '100%',
    justifyContent: 'space-between',
  },
})`
  padding: 0 10px;
`;

export const MainContent = styled.View``;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 15px;

  margin: 20px 0;
`;

export const ProfilePhotoContainer = styled.View`
  width: 60px;
  height: 60px;
`;

export const ProfilePhoto = styled.Image`
  width: 100%;
  height: 100%;

  border-radius: 30px;
`;

export const ProfileName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const LogoutIcon = styled(SignOut).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.gray[700],
}))``;
