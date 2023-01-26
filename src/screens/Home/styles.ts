import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.utils.white};

  padding: 0 15px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;

  margin: 20px 0;
  padding-bottom: 10px;

  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: ${({ theme }) => theme.colors.gray[300]};
`;

export const HeaderContent = styled.View``;

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: 18px;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const HeaderSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 14px;

  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const MainContainer = styled.View`
  margin-top: 20px;
`;

export const NavigationButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 4px;

  padding: 20px;
  margin-bottom: 15px;
`;

export const NavigationButtonContent = styled.View`
  width: 90%;
`;

export const NavigationButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14px;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const NavigationButtonDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 12px;

  color: ${({ theme }) => theme.colors.gray[500]};

  margin-top: 4px;
`;
