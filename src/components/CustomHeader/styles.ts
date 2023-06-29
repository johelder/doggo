import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  elevation: 1;
  z-index: 1;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.utils.white};
`;
