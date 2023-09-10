import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.gray[0]};
`;

export const Content = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.spacings.md}px;
  gap: ${({ theme }) => theme.spacings.md}px;

  justify-content: space-between;
`;
