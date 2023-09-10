import styled from 'styled-components/native';

export const Container = styled.View`
  gap: ${({ theme }) => theme.spacings.xxlg}px;
`;

export const TextsContainer = styled.View`
  gap: ${({ theme }) => theme.spacings.sm}px;
  margin-top: ${({ theme }) => theme.spacings.md}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: ${({ theme }) => theme.sizes.lg}px;
  text-align: center;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${({ theme }) => theme.sizes.xmd}px;
  text-align: center;
  line-height: ${({ theme }) => theme.spacings.lg}px;

  color: ${({ theme }) => theme.colors.gray[500]};
`;
