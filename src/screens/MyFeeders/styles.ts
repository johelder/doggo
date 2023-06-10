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

export const EmptyListContainer = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 16px;

  padding: 0 32px;
`;

export const IconContainer = styled.View`
  width: 40px;
  height: 40px;

  background-color: ${({ theme }) => theme.colors.gray[200]};
  border-radius: 20px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: 16px;
  line-height: 22px;
  text-align: center;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 14px;
  line-height: 22px;
  text-align: center;

  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const DetailsButton = styled.TouchableOpacity``;

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
