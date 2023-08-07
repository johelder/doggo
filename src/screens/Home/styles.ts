import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import type { IFeeder } from '@src/types';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.utils.white};
`;

export const Overlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: ${({ theme }) => theme.colors.utils.overlay};
`;

export const CustomCalloutContainer = styled.View`
  max-width: 350px;

  position: absolute;
  background-color: ${({ theme }) => theme.colors.utils.white};
  border-radius: 4px;
`;

export const LoaderContainer = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const Feeders = styled(
  FlatList as new (props: FlatListProps<IFeeder>) => FlatList<IFeeder>,
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flex: 1,
    gap: 16,
  },
})``;

export const CloseButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.gray[100]};

  border-radius: 15px;

  align-items: center;
  justify-content: center;

  margin-left: auto;
`;
