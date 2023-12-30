import styled from 'styled-components/native';

export const FormHeader = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.sm}px;

  margin: ${({ theme }) => theme.spacings.xxsm}px 0px;
`;

export const Title = styled.Text<{ appearance: string }>`
  flex-shrink: 1;
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${({ theme }) => theme.sizes.md}px;

  color: ${({ theme, appearance }) =>
    appearance === 'dark' ? theme.colors.gray[700] : theme.colors.gray[500]};
`;
