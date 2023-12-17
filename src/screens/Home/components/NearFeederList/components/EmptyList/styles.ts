import styled from 'styled-components/native';

export const ListEmptyContainer = styled.View`
  width: 100%;

  padding: 0px ${({ theme }) => theme.spacings.md}px;

  gap: ${({ theme }) => theme.spacings.sm}px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: ${({ theme }) => theme.sizes.md}px;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: ${({ theme }) => theme.sizes.sm}px;
  line-height: ${({ theme }) => theme.spacings.md}px;
  text-align: center;

  color: ${({ theme }) => theme.colors.gray[500]};
`;
