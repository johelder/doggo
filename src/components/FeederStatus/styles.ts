import styled from 'styled-components/native';

import { ThemeSizes } from '@theme';

import { FeederStatusProps } from './types';

export const Container = styled.View<{ align: FeederStatusProps['align'] }>`
  flex-direction: row;
  align-items: center;
  align-self: center;
  gap: ${({ theme }) => theme.spacings.sm}px;

  margin-bottom: ${({ theme }) => theme.spacings.xxsm}px;
  margin-left: ${({ align }) => (align === 'center' ? 'auto' : 0)};
`;

export const Label = styled.Text<{
  isNeedMaintenance: boolean;
  size: ThemeSizes;
}>`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${({ theme, size }) => theme.sizes[size]}px;

  color: ${({ theme, isNeedMaintenance }) =>
    isNeedMaintenance ? theme.colors.red[500] : theme.colors.green[500]};
`;
