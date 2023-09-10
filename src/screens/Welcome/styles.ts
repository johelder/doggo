import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[0]};
`;

export const Content = styled.View`
  padding: ${({ theme }) => theme.spacings.xxlg}px
    ${({ theme }) => theme.spacings.md}px ${({ theme }) => theme.spacings.md}px;
`;

export const Header = styled.View`
  align-items: center;
  gap: ${({ theme }) => theme.spacings.lg}px;
`;

export const TextsContainer = styled.View`
  gap: ${({ theme }) => theme.spacings.xxsm}px;
  align-self: flex-start;
`;

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: ${({ theme }) => theme.sizes.lg}px;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${({ theme }) => theme.sizes.md}px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: ${({ theme }) => theme.sizes.md}px;
  color: ${({ theme }) => theme.colors.gray[700]};

  margin: ${({ theme }) => theme.spacings.xxlg}px 0px
    ${({ theme }) => theme.spacings.md}px;
`;

export const ButtonsContainer = styled.View`
  gap: ${({ theme }) => theme.spacings.md}px;
`;
