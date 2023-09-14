import styled, { css } from 'styled-components/native';

export const Container = styled.View<{ isSelected: boolean; color?: string }>`
  width: ${({ theme }) => theme.sizes.xlg}px;
  height: ${({ theme }) => theme.sizes.xlg}px;

  border-radius: ${({ theme }) => theme.sizes.xxxsm}px;
  border-width: 2px;

  border-color: ${({ theme }) => theme.colors.gray[500]};
  background-color: ${({ theme }) => theme.colors.gray[0]};

  ${({ isSelected, color, theme }) =>
    isSelected &&
    css`
      border-color: ${color ?? theme.colors.orange[500]};
      background-color: ${color ?? theme.colors.orange[500]};
    `}
`;
