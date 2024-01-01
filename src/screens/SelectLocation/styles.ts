import styled from 'styled-components/native';

export const Container = styled.SafeAreaView``;

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: ${({ theme }) => theme.spacings.md}px;
  left: 0;
  right: 0;

  margin: 0px ${({ theme }) => theme.spacings.md}px;
`;
