import styled, { css } from 'styled-components/native';
import X from 'phosphor-react-native/src/icons/X';
import { TToastType } from '../types';

import Animated from 'react-native-reanimated';

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
  justify-content: center;

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

export const IconContainer = styled.View`
  flex: 1;
`;

export const Message = styled.Text`
  flex: 8;

  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: 14px;
  line-height: 20px;

  color: ${({ theme }) => theme.colors.utils.white};
  padding: 0 10px;
`;

export const CloseButton = styled.TouchableOpacity`
  flex: 1;
`;

export const CloseIcon = styled(X)``;
