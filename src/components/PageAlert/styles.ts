import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.md}px;

  padding: 0px ${({ theme }) => theme.spacings.xlg}px;

  background-color: ${({ theme }) => theme.colors.gray[0]};
`;

export const IconContainer = styled.View<{ color?: string }>`
  width: 40px;
  height: 40px;

  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.gray[200]};
  border-radius: 20px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${({ theme }) => theme.sizes.xmd}px;
  line-height: ${({ theme }) => theme.spacings.xmd}px;
  text-align: center;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: ${({ theme }) => theme.sizes.md}px;
  line-height: ${({ theme }) => theme.spacings.xmd}px;
  text-align: center;

  color: ${({ theme }) => theme.colors.gray[500]};
`;
