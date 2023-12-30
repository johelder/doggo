import styled from 'styled-components/native';

export const Container = styled.View`
  gap: ${({ theme }) => theme.spacings.sm}px;
  padding: ${({ theme }) => theme.spacings.md}px;

  border-radius: ${({ theme }) => theme.sizes.xxxsm}px;
`;

export const Actions = styled.View`
  flex-shrink: 1;
  gap: ${({ theme }) => theme.spacings.sm}px;

  margin-top: ${({ theme }) => theme.spacings.sm}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
