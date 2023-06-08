import styled from 'styled-components/native';

export const ComponentContainer = styled.View`
  flex-direction: row;
  gap: 4px;
`;

export const PageContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.utils.white};
`;
