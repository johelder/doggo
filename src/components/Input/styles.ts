import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled.View<{ isInputFocused: boolean }>`
  width: 100%;

  border-bottom-width: ${({ isInputFocused }) => (isInputFocused ? 2 : 1)}px;
  border-bottom-color: ${({ theme, isInputFocused }) =>
    isInputFocused ? theme.colors.gray[500] : theme.colors.gray[300]};

  justify-content: center;
`;

export const Input = styled.TextInput`
  padding: 0;

  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14px;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Placeholder = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14px;

  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const OptionalLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 10px;

  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const AnimatedPlaceholderContainer = styled(Animated.View)`
  position: absolute;

  flex-direction: row;
  align-items: center;

  gap: 6px;
`;
