import styled from 'styled-components/native';

export const Container = styled.View`
  padding: ${({ theme }) => theme.spacings.md}px 0px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: ${({ theme }) => theme.sizes.xmd}px;
  text-align: center;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${({ theme }) => theme.sizes.md}px;
  text-align: center;
  line-height: ${({ theme }) => theme.spacings.xmd}px;

  color: ${({ theme }) => theme.colors.gray[500]};

  margin-bottom: ${({ theme }) => theme.spacings.xlg}px;
`;

export const Footer = styled.View`
  gap: ${({ theme }) => theme.spacings.sm}px;
`;
