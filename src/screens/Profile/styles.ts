import CookingPot from 'phosphor-react-native/src/icons/CookingPot';
import Gear from 'phosphor-react-native/src/icons/Gear';
import Heart from 'phosphor-react-native/src/icons/Heart';
import SignOut from 'phosphor-react-native/src/icons/SignOut';
import styled, { DefaultTheme } from 'styled-components/native';

import { PlusIcon } from '@assets';

function iconsDefaultStyles(theme: DefaultTheme) {
  return {
    size: theme.sizes.xxlg,
    color: theme.colors.gray[700],
  };
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[0]};
`;

export const Content = styled.View<{ tabBarHeight: number }>`
  height: 100%;
  padding: ${({ tabBarHeight, theme }) =>
    `0px ${theme.spacings.md}px ${tabBarHeight}px`};

  justify-content: space-between;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.md}px;

  margin: ${({ theme }) => theme.spacings.xmd}px 0px;
`;

export const InfoContainer = styled.View`
  flex-direction: column;
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
  font-size: ${({ theme }) => theme.sizes.xmd}px;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const ProfileEmail = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${({ theme }) => theme.sizes.md}px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const MainContent = styled.View``;

export const FeederIcon = styled(CookingPot).attrs(({ theme }) =>
  iconsDefaultStyles(theme),
)``;

export const FavoriteIcon = styled(Heart).attrs(({ theme }) =>
  iconsDefaultStyles(theme),
)``;

export const SignOutIcon = styled(SignOut).attrs(({ theme }) =>
  iconsDefaultStyles(theme),
)``;

export const SelectLocation = styled(PlusIcon).attrs(({ theme }) =>
  iconsDefaultStyles(theme),
)``;

export const ConfigIcon = styled(Gear).attrs(({ theme }) =>
  iconsDefaultStyles(theme),
)``;
