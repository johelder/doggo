import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import type { IFeeder } from '@src/types';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.utils.white};
`;

export const Content = styled.View`
  flex: 1;
`;

export const MapContainer = styled.View<{
  hasNearFeeders: boolean;
  isNearFeederListExpanded: boolean;
}>`
  height: ${({ hasNearFeeders, isNearFeederListExpanded }) =>
    hasNearFeeders && isNearFeederListExpanded ? '60%' : '100%'};
`;

export const NearFeedersContainer = styled.View<{ tabBarHeight: number }>`
  width: 100%;

  position: absolute;
  bottom: 0;

  padding: 16px 0 ${({ tabBarHeight }) => tabBarHeight + 16}px;
  background-color: ${({ theme }) => theme.colors.utils.white};

  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
`;

export const HeaderContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 16px 16px;
`;

export const NearFeederContainer = styled.TouchableOpacity`
  max-width: 350px;
  border-radius: 4px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray[200]};
`;

export const Overlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.utils.overlay};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14px;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const CustomCalloutContainer = styled.View`
  width: 90%;

  position: absolute;
  background-color: ${({ theme }) => theme.colors.utils.white};
  border-radius: 4px;
`;

export const LoaderContainer = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const NearFeeders = styled(
  FlatList as new (props: FlatListProps<IFeeder>) => FlatList<IFeeder>,
).attrs({
  horizontal: true,
  contentContainerStyle: {
    gap: 10,
    paddingHorizontal: 16,
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
