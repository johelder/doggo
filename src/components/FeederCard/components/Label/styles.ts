import styled, { css } from 'styled-components/native';

export const Container = styled.Text<{ isTitle: boolean }>`
  font-family: ${({ theme, isTitle }) =>
    theme.fonts.primary[isTitle ? 'semiBold' : 'medium']};
  font-size: 14px;
  line-height: 20px;

  color: ${({ theme }) => theme.colors.gray[500]};

  ${({ isTitle, theme }) =>
    isTitle &&
    css`
      flex: 8;
      color: ${theme.colors.gray[700]};
    `}
`;
