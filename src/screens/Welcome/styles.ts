import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.utils.white};
`;

export const Content = styled.View`
  padding: 40px 16px 16px;
`;

export const Header = styled.View``;

export const TextsContainer = styled.View`
  gap: 4px;
`;

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[700]};

  margin: 40px 0 16px;
`;

export const ButtonsContainer = styled.View`
  gap: 16px;
`;
