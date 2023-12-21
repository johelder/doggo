import styled from 'styled-components/native';

export const Container = styled.View`
  min-height: 64px;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  elevation: 1;

  margin: ${({ theme }) => theme.spacings.md}px;
`;
