import styled, { css } from 'styled-components/native';

export const Container = styled.View<{ isSelected: boolean }>`
  width: 30px;
  height: 30px;

  border-radius: 4px;
  border-width: 2px;

  border-color: ${({ theme }) => theme.colors.gray[500]};
  background-color: ${({ theme }) => theme.colors.utils.white};

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      border-color: ${theme.colors.primary[500]};
      background-color: ${theme.colors.primary[500]};
    `}
`;
