import styled from 'styled-components/native';

export const Container = styled.View`
  width: 300px;
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.colors.utils.white};

  align-self: center;
  gap: 8px;

  padding: 16px;
  margin-bottom: 10px;
  border-radius: 4px;
`;

export const Session = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 0 8px;
`;

export const Title = styled.Text`
  flex-shrink: 1;

  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 12px;
  line-height: 18px;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const SubTitle = styled(Title)`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  color: ${({ theme }) => theme.colors.gray[500]};
`;
