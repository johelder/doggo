import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  position: absolute;
  bottom: 0;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.sm}px;

  background-color: ${({ theme }) => theme.colors.gray[0]};
  border-radius: 99px;

  margin-bottom: ${({ theme }) =>
    Platform.OS === 'ios' ? theme.spacings.xlg : theme.spacings.lg}px;

  elevation: 10;
  shadow-color: ${({ theme }) => theme.colors.gray[950]};
  shadow-offset: 0 2px;
  shadow-opacity: 0.2;
  shadow-radius: 3.8px;
`;

export const ButtonTabContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const ButtonTabContent = styled.View<{ isFocused: boolean }>`
  align-items: center;

  background-color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.orange[500] : theme.colors.gray[0]};

  border-radius: 99px;
  padding: ${({ theme }) => theme.spacings.xsm}px
    ${({ theme }) => theme.spacings.md}px;
`;

export const ButtonTabIconContainer = styled.View``;

export const ButtonTabBarLabel = styled.Text<{ isFocused: boolean }>`
  font-family: ${({ theme, isFocused }) =>
    theme.fonts.primary[isFocused ? 'semiBold' : 'medium']};
  font-size: 12px;

  color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.orange[200] : theme.colors.gray[500]};
`;
