import styled from 'styled-components/native';

export const Container = styled.View`
  max-width: 300px;

  position: absolute;
  background-color: ${({ theme }) => theme.colors.utils.white};
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const Content = styled.View`
  width: 100%;

  align-self: center;
  gap: 8px;
`;

export const Session = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
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

export const Actions = styled.View`
  flex-direction: row;
  flex-shrink: 1;
  gap: 8px;
`;
