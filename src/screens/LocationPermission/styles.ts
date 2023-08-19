import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.utils.white};
`;

export const Content = styled.View`
  flex: 1;
  padding: 16px;
  gap: 16px;

  justify-content: space-between;
`;

export const Header = styled.View`
  gap: 16px;
`;

export const TextsContainer = styled.View`
  gap: 8px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 16px;
  text-align: center;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: 14px;
  text-align: center;
  line-height: 20px;

  color: ${({ theme }) => theme.colors.gray[500]};
`;
