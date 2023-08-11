import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 16px;

  border-width: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.gray[300]};

  flex-direction: row;
  align-items: center;
`;

export const LabelsContainer = styled.View`
  gap: 6px;
  flex-shrink: 1;

  padding: 0 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14px;
  line-height: 20px;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 12px;

  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const IconContainer = styled.View`
  margin-left: auto;
`;
