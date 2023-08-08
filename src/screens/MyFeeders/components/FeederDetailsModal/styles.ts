import styled from 'styled-components/native';

export const Container = styled.View`
  padding-bottom: 32px;
`;

export const Header = styled.View`
  align-items: center;
  margin-top: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14px;
  line-height: 22px;
  text-align: center;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 10px;

  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  gap: 10px;
  margin: 32px 0 16px;
`;
