import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[0]};
`;

export const Content = styled.View`
  flex: 1;

  padding: ${({ theme }) => theme.spacings.md}px;

  justify-content: space-between;
`;

export const MainContent = styled.View``;

export const Footer = styled.View`
  align-items: center;
  gap: ${({ theme }) => theme.spacings.md}px;
`;

export const VersionButton = styled.TouchableOpacity`
  flex-direction: row;
  gap: ${({ theme }) => theme.spacings.sm}px;

  align-items: center;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${({ theme }) => theme.sizes.md}px;

  color: ${({ theme }) => theme.colors.gray[500]};
`;
