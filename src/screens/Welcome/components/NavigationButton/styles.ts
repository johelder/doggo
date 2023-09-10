import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.spacings.md}px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.sizes.xxxsm}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextsContainer = styled.View`
  flex: 1;
  gap: ${({ theme }) => theme.spacings.sm}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: ${({ theme }) => theme.sizes.md}px;

  color: ${({ theme }) => theme.colors.gray[700]};
  flex-shrink: 1;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: ${({ theme }) => theme.sizes.sm}px;
  line-height: ${({ theme }) => theme.spacings.md}px;

  color: ${({ theme }) => theme.colors.gray[500]};
  flex-shrink: 1;
`;
