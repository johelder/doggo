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
  gap: 8px;

  background-color: ${({ theme }) => theme.colors.utils.white};
  border-radius: 99px;

  margin-bottom: ${Platform.OS === 'ios' ? 38 : 24}px;

  elevation: 10;
  shadow-color: ${({ theme }) => theme.colors.utils.shadow};
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
    isFocused ? theme.colors.primary[500] : theme.colors.utils.white};

  border-radius: 99px;
  padding: 6px 16px;
`;

export const ButtonTabIconContainer = styled.View``;

export const ButtonTabBarLabel = styled.Text<{ isFocused: boolean }>`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 12px;

  color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.gray[100] : theme.colors.gray[500]};
`;
