import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  width: ${({ theme }) => theme.sizes.xlg}px;
  height: ${({ theme }) => theme.sizes.xlg}px;

  border-radius: ${({ theme }) => theme.sizes.xlg / 2}px;

  background-color: ${({ theme }) => theme.colors.gray[700]};

  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: ${({ theme }) => theme.sizes.md}px;

  color: ${({ theme }) => theme.colors.gray[0]};
  position: relative;
`;

export const TooltipContainer = styled.TouchableOpacity`
  min-width: 180px;
  position: absolute;
  bottom: 100%;

  padding: ${({ theme }) => theme.spacings.sm}px;
  margin-bottom: ${({ theme }) => theme.spacings.sm}px;

  background-color: ${({ theme }) => theme.colors.gray[700]};
  border-radius: ${({ theme }) => theme.sizes.xxxsm}px;
`;

export const TooltipLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${({ theme }) => theme.sizes.xsm}px;
  text-align: center;

  color: ${({ theme }) => theme.colors.gray[0]};
`;
