import styled, { DefaultTheme } from 'styled-components/native';

import CookingPot from 'phosphor-react-native/src/icons/CookingPot';
import Heart from 'phosphor-react-native/src/icons/Heart';
import Gear from 'phosphor-react-native/src/icons/Gear';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.utils.white};

  padding: 0 15px;
`;

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

export const MainContent = styled.View``;

const iconsStyles = (theme: DefaultTheme) => ({
  size: 24,
  color: theme.colors.gray[700],
});

export const FeederIcon = styled(CookingPot).attrs(({ theme }) =>
  iconsStyles(theme),
)``;

export const FavoriteIcon = styled(Heart).attrs(({ theme }) =>
  iconsStyles(theme),
)``;

export const ConfigurationIcon = styled(Gear).attrs(({ theme }) =>
  iconsStyles(theme),
)``;
