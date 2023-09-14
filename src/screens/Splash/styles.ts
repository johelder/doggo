import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.orange[500]};

  align-items: center;
  justify-content: center;
`;
