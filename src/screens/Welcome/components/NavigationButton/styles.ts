import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 16px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextsContainer = styled.View`
  flex: 1;
  gap: 8px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14px;

  color: ${({ theme }) => theme.colors.gray[700]};
  flex-shrink: 1;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 12px;
  line-height: 18px;

  color: ${({ theme }) => theme.colors.gray[500]};
  flex-shrink: 1;
`;
