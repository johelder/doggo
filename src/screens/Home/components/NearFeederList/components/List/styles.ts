import { FlatList } from 'react-native';

import styled from 'styled-components/native';

import { FeederDomain } from '@data';

export const List = styled(FlatList<FeederDomain>).attrs(({ theme }) => ({
  horizontal: true,
  contentContainerStyle: {
    gap: theme.spacings.sm,
    paddingHorizontal: theme.spacings.md,
  },
}))``;

export const NearFeederContainer = styled.TouchableOpacity`
  max-width: 350px;

  border-radius: ${({ theme }) => theme.sizes.xxxsm}px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray[200]};
`;
