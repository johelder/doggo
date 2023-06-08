import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import type { IDomainFeeder } from '@src/types/domain';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.utils.white};
`;

export const DetailsButton = styled.TouchableOpacity``;

export const Feeders = styled(
  FlatList as new (
    props: FlatListProps<IDomainFeeder>,
  ) => FlatList<IDomainFeeder>,
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 16,
    gap: 16,
  },
})``;
