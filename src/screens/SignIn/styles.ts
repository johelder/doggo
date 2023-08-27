import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[0]};

  justify-content: space-between;
`;

export const GreetingsContainer = styled.View`
  padding: 0 ${({ theme }) => theme.spacings.md}px;
`;

export const GreetingsTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: ${({ theme }) => theme.sizes.lg}px;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const GreetingsSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: ${({ theme }) => theme.spacings.md}px;
  line-height: ${({ theme }) => theme.spacings.lg}px;

  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const GoogleButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  height: 60px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin: 0 ${({ theme }) => theme.spacings.md}px
    ${({ theme }) => theme.spacings.md}px;
  padding: ${({ theme }) => theme.spacings.xsm}px;

  border-radius: ${({ theme }) => theme.sizes.xxxsm}px;

  background-color: ${({ theme }) => theme.colors.blue[500]};
  opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};
`;

export const GoogleLogoContainer = styled.View`
  padding: ${({ theme }) => theme.spacings.sm}px
    ${({ theme }) => theme.spacings.md}px;

  border-radius: ${({ theme }) => theme.sizes.xxxsm}px;
  background-color: ${({ theme }) => theme.colors.gray[50]};
`;

export const GoogleButtonLabelContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const GoogleButtonLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: ${({ theme }) => theme.sizes.md}px;

  color: ${({ theme }) => theme.colors.gray[0]};
`;
