import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[0]};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;

  padding: ${({ theme }) => theme.spacings.md}px;
`;

export const Header = styled.View`
  gap: ${({ theme }) => theme.spacings.md}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${({ theme }) => theme.sizes.xmd}px;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: ${({ theme }) => theme.sizes.md}px;
  line-height: ${({ theme }) => theme.spacings.xmd}px;

  color: ${({ theme }) => theme.colors.gray[700]};
`;
