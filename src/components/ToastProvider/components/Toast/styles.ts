import styled, { css } from 'styled-components/native';
import Animated from 'react-native-reanimated';
import X from 'phosphor-react-native/src/icons/X';

import type { TToastType } from '../../types';

export const Container = styled(Animated.View)`
  min-height: 64px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  elevation: 1;

  margin: 16px;
`;

export const Content = styled.View<{ type: TToastType }>`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  padding: 16px;
  border-radius: 4px;

  ${({ theme, type }) =>
    type === 'success' &&
    css`
      background-color: ${theme.colors.success[500]};
    `}

  ${({ theme, type }) =>
    type === 'error' &&
    css`
      background-color: ${theme.colors.attention[500]};
    `}

    ${({ theme, type }) =>
    type === 'warning' &&
    css`
      background-color: ${theme.colors.secondary[600]};
    `}
`;

export const IconContainer = styled.View``;

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: 14px;
  line-height: 20px;

  flex-shrink: 1;

  color: ${({ theme }) => theme.colors.utils.white};
  padding: 0 10px;
`;

export const CloseButton = styled.TouchableOpacity`
  margin-left: auto;
`;

export const CloseIcon = styled(X)``;
