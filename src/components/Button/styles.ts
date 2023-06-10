import styled, { css } from 'styled-components/native';
import { IButtonRootProps, IButtonTextProps } from './types';

export const ButtonRootContainer = styled.TouchableOpacity<IButtonRootProps>`
  width: 100%;
  height: 56px;

  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;

  background-color: transparent;

  ${({ type, color }) =>
    type === 'filled' &&
    css`
      background-color: ${color};
      border: 1px solid ${color};
    `}

  ${({ type, color }) =>
    type === 'outline' &&
    css`
      border: 1px solid ${color};
      background-color: transparent;
    `}

    ${({ disabled, theme }) =>
    disabled &&
    css`
      border: 1px solid ${theme.colors.gray[300]};
      background-color: ${theme.colors.gray[300]};
    `}
`;

export const ButtonIconContainer = styled.View``;

export const ButtonTextContainer = styled.Text<IButtonTextProps>`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14px;

  color: ${({ color }) => color};
`;
