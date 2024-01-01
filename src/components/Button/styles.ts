import styled, { css } from 'styled-components/native';

import { ButtonRootProps, ButtonTextProps } from './types';

export const ButtonRootContainer = styled.TouchableOpacity<ButtonRootProps>`
  width: 100%;
  height: ${({ height, theme }) => height ?? theme.spacings.xxlg}px;

  border-radius: ${({ theme }) => theme.sizes.xxxsm}px;
  border-width: 1px;

  flex-shrink: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings.xsm}px;

  background-color: transparent;
  border-color: transparent;

  ${({ type, color }) =>
    type === 'filled' &&
    css`
      background-color: ${color};
      border-color: ${color};
    `}

  ${({ type, color }) =>
    type === 'outline' &&
    css`
      background-color: transparent;
      border-color: ${color};
    `}

    ${({ disabled, theme }) =>
    disabled &&
    css`
      border-color: ${theme.colors.gray[300]};
      background-color: ${theme.colors.gray[300]};
    `}
`;

export const ButtonIconContainer = styled.View``;

export const ButtonTextContainer = styled.Text<ButtonTextProps>`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: ${({ theme }) => theme.sizes.md}px;

  color: ${({ color }) => color};
`;
