import { FlatList } from 'react-native';

import styled from 'styled-components/native';

import { FeederDomain } from '@data';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[0]};
`;

export const Feeders = styled(FlatList<FeederDomain>).attrs(({ theme }) => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexGrow: 1,
    padding: theme.spacings.md,
    gap: theme.spacings.md,
  },
}))``;
