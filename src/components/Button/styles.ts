import styled, { css } from 'styled-components/native';
import { IButtonRootProps, IButtonTextProps } from './types';

export const ButtonRootContainer = styled.TouchableOpacity<IButtonRootProps>`
  width: 100%;
  height: ${({ height }) => height ?? 48}px;

  border-radius: 4px;
  border-width: 1px;

  flex-shrink: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;

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

export const ButtonTextContainer = styled.Text<IButtonTextProps>`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14px;

  color: ${({ color }) => color};
`;
