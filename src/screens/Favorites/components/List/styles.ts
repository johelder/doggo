import { FlatList } from 'react-native';

import styled from 'styled-components/native';

import { FeederDomain } from '@data';

export const Feeders = styled(FlatList<FeederDomain>).attrs(({ theme }) => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexGrow: 1,
    padding: theme.spacings.md,
    gap: theme.spacings.md,
  },
}))``;
