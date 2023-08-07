import styled, { css } from 'styled-components/native';

export const Container = styled.View<{ isSelected: boolean; color?: string }>`
  width: 20px;
  height: 20px;

  border-radius: 4px;
  border-width: 2px;

  border-color: ${({ theme }) => theme.colors.gray[500]};
  background-color: ${({ theme }) => theme.colors.utils.white};

  ${({ isSelected, color, theme }) =>
    isSelected &&
    css`
      border-color: ${color ?? theme.colors.primary[500]};
      background-color: ${color ?? theme.colors.primary[500]};
    `}
`;
