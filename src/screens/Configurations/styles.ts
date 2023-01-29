import styled from 'styled-components/native';
import SignOut from 'phosphor-react-native/src/icons/SignOut';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.utils.white};
  padding: 15px;

  justify-content: space-between;
`;

export const MainContent = styled.View``;

export const LogoutIcon = styled(SignOut).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.gray[700],
}))``;
