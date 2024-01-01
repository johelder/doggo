import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  top: ${({ theme }) => -theme.spacings.xmd}px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.orange[500]};
`;
