import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.utils.white};

  justify-content: space-between;
`;

export const GreetingsContainer = styled.View`
  padding: 0 15px;
`;

export const GreetingsTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 20px;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const GreetingsSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const GoogleButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  height: 60px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin: 0 15px 15px;
  padding: 6px;

  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.utils.googleBlue};
  opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};
`;

export const GoogleLogoContainer = styled.View`
  padding: 12px 14px;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.utils.googleWhite};
`;

export const GoogleButtonLabelContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const GoogleButtonLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14px;

  color: ${({ theme }) => theme.colors.utils.white};
`;
