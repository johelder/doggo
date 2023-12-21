import X from 'phosphor-react-native/src/icons/X';
import Animated from 'react-native-reanimated';
import styled, { css } from 'styled-components/native';

import { TToastType } from '../../types';

export const Content = styled(Animated.View)<{ type: TToastType }>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacings.sm}px;

  padding: ${({ theme }) => theme.spacings.md}px;
  border-radius: ${({ theme }) => theme.sizes.xxxsm}px;

  ${({ theme, type }) =>
    type === 'success' &&
    css`
      background-color: ${theme.colors.green[500]};
    `}

  ${({ theme, type }) =>
    type === 'error' &&
    css`
      background-color: ${theme.colors.red[500]};
    `}

    ${({ theme, type }) =>
    type === 'warning' &&
    css`
      background-color: ${theme.colors.cyan[600]};
    `}
`;

export const IconContainer = styled.View``;

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${({ theme }) => theme.sizes.md}px;
  line-height: ${({ theme }) => theme.spacings.xmd}px;

  flex-shrink: 1;

  color: ${({ theme }) => theme.colors.gray[0]};
`;

export const CloseButton = styled.TouchableOpacity``;

export const CloseIcon = styled(X)``;
