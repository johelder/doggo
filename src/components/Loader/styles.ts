import styled from 'styled-components/native';

export const ComponentContainer = styled.View`
  flex-direction: row;
  gap: ${({ theme }) => theme.spacings.xxsm}px;
`;

export const PageContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.gray[0]};
`;
