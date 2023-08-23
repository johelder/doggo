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
