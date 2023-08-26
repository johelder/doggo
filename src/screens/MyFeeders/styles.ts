import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import type { IFeeder } from '@src/types';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.utils.white};
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 14px;
  line-height: 22px;
  text-align: center;

  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const Feeders = styled(
  FlatList as new (props: FlatListProps<IFeeder>) => FlatList<IFeeder>,
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 16,
    gap: 16,
    flexGrow: 1,
  },
})``;

export const Highlighted = styled(Label)`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  color: ${({ theme }) => theme.colors.secondary[600]};
`;
