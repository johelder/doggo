import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${({ theme }) => theme.sizes.md}px;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${({ theme }) => theme.sizes.sm}px;

  color: ${({ theme }) => theme.colors.gray[500]};
`;
