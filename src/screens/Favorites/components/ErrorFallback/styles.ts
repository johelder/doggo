import styled from 'styled-components/native';

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: ${({ theme }) => theme.sizes.md}px;
  line-height: ${({ theme }) => theme.sizes.xlg}px;
  text-align: center;

  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const Highlighted = styled(Label)`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  color: ${({ theme }) => theme.colors.cyan[600]};
`;
