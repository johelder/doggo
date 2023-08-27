import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';

import type { IFeeder } from '@types';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[0]};
`;

export const Feeders = styled(
  FlatList as new (props: FlatListProps<IFeeder>) => FlatList<IFeeder>,
).attrs(({ theme }) => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexGrow: 1,
    padding: theme.spacings.md,
    gap: theme.spacings.md,
  },
}))``;

export const FeederCardContainer = styled.View`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray[200]};
`;

export const FavoriteButton = styled.TouchableOpacity`
  margin-left: auto;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: ${({ theme }) => theme.sizes.md}px;
  line-height: ${({ theme }) => theme.sizes.xlg}px;
  text-align: center;

  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const Highlighted = styled(Label)`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  color: ${({ theme }) => theme.colors.cyan[600]};
`;
