import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 16px;

  border-width: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.gray[300]};

  gap: 8px;
`;
