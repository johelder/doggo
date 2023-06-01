import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.utils.white};
  padding: 16px;
`;

export const DetailsButton = styled.TouchableOpacity``;
