import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.spacings.md}px;

  border-width: 1px;
  border-radius: ${({ theme }) => theme.sizes.xxxsm}px;
  border-color: ${({ theme }) => theme.colors.gray[300]};

  flex-direction: row;
  align-items: center;
`;

export const LabelsContainer = styled.View`
  gap: ${({ theme }) => theme.spacings.xsm}px;
  flex-shrink: 1;

  padding: 0px ${({ theme }) => theme.spacings.md}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: ${({ theme }) => theme.sizes.md}px;
  line-height: ${({ theme }) => theme.spacings.xmd}px;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: ${({ theme }) => theme.sizes.sm}px;

  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const IconContainer = styled.View`
  margin-left: auto;
`;
