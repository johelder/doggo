import styled from 'styled-components/native';

export const LocationNotAvailableContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  padding: ${({ theme }) => theme.spacings.md}px;
`;
