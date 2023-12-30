import styled from 'styled-components/native';

import { ThemeSizes } from '@theme';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.sm}px;
`;

export const Label = styled.Text<{ size: ThemeSizes; color?: string }>`
  flex-shrink: 1;
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${({ theme, size }) => theme.sizes[size]}px;

  color: ${({ theme, color }) => color ?? theme.colors.gray[500]};
`;
