import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

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
  font-size: ${({ theme }) => theme.sizes.md}px;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Placeholder = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: ${({ theme }) => theme.sizes.md}px;

  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const OptionalLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: ${({ theme }) => theme.sizes.xsm}px;

  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const AnimatedPlaceholderContainer = styled(Animated.View)`
  position: absolute;

  flex-direction: row;
  align-items: center;

  gap: ${({ theme }) => theme.spacings.xsm}px;
`;
