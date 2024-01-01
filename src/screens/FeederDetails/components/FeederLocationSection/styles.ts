import styled from 'styled-components/native';

export const Main = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.spacings.md}px;
  gap: ${({ theme }) => theme.spacings.sm}px;
`;

export const Title = styled.Text<{ appearance: string }>`
  flex-shrink: 1;
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${({ theme }) => theme.sizes.md}px;

  color: ${({ theme, appearance }) =>
    appearance === 'dark' ? theme.colors.gray[700] : theme.colors.gray[500]};
`;
