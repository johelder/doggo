import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Label = styled.Text<{ isSelected?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: ${({ theme }) => theme.sizes.md}px;

  color: ${({ theme, isSelected = true }) =>
    isSelected ? theme.colors.orange[500] : theme.colors.gray[500]};
`;
