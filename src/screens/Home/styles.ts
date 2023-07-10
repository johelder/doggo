import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import type { IDomainFeeder } from '@src/types/domain';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.utils.white};
`;

export const LoaderContainer = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const Feeders = styled(
  FlatList as new (
    props: FlatListProps<IDomainFeeder>,
  ) => FlatList<IDomainFeeder>,
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
})``;
