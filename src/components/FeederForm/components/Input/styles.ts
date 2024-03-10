import styled from 'styled-components/native';

export const Container = styled.View<{ flex?: number }>`
  flex: ${({ flex }) => flex};
`;

export const FieldDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: ${({ theme }) => theme.sizes.sm}px;

  color: ${({ theme }) => theme.colors.gray[500]};

  margin-top: ${({ theme }) => theme.spacings.sm}px;
`;
