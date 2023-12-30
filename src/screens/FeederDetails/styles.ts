import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[0]};
`;

export const Content = styled.ScrollView`
  flex: 1;
`;

export const Separator = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray[200]};

  margin: ${({ theme }) => theme.spacings.sm}px
    ${({ theme }) => theme.spacings.md}px 0px;
`;
