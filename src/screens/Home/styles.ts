import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.utils.white};
`;

export const LoaderContainer = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
`;
