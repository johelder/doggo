import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.utils.white};
`;

export const Content = styled.View`
  flex: 1;

  padding: 16px;

  justify-content: space-between;
`;

export const MainContent = styled.View``;

export const Footer = styled.View`
  align-items: center;
  gap: 16px;
`;

export const VersionButton = styled.TouchableOpacity`
  flex-direction: row;
  gap: 8px;

  align-items: center;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: 14px;

  color: ${({ theme }) => theme.colors.gray[500]};
`;
