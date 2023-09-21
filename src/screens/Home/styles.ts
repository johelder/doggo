import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';

import type { IFeeder } from '@types';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.gray[0]};
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

  padding: ${({ theme }) => theme.spacings.md}px 0px
    ${({ tabBarHeight }) => tabBarHeight + 60}px;
  background-color: ${({ theme }) => theme.colors.gray[0]};

  border-top-right-radius: ${({ theme }) => theme.sizes.xmd}px;
  border-top-left-radius: ${({ theme }) => theme.sizes.xmd}px;
`;

export const HeaderContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0px ${({ theme }) => theme.spacings.md}px
    ${({ theme }) => theme.spacings.md}px;
`;

export const NearFeederContainer = styled.TouchableOpacity`
  max-width: 350px;

  border-radius: ${({ theme }) => theme.sizes.xxxsm}px;
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

  background-color: ${({ theme }) => theme.colors.gray[900]};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: ${({ theme }) => theme.sizes.md}px;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const CustomCalloutContainer = styled.View`
  width: 90%;

  position: absolute;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  border-radius: ${({ theme }) => theme.sizes.xxxsm}px;
`;

export const LoaderContainer = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const NearFeeders = styled(
  FlatList as new (props: FlatListProps<IFeeder>) => FlatList<IFeeder>,
).attrs(({ theme }) => ({
  horizontal: true,
  contentContainerStyle: {
    gap: theme.spacings.sm,
    paddingHorizontal: theme.spacings.md,
  },
}))``;

export const CloseButton = styled.TouchableOpacity`
  width: ${({ theme }) => theme.spacings.xlg}px;
  height: ${({ theme }) => theme.spacings.xlg}px;
  background-color: ${({ theme }) => theme.colors.gray[100]};

  border-radius: ${({ theme }) => theme.sizes.xmd}px;

  align-items: center;
  justify-content: center;

  margin-left: auto;
`;

export const LocationNotAvailableContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  padding: ${({ theme }) => theme.spacings.md}px;
`;

export const ListEmptyContainer = styled.View`
  width: 100%;

  padding: 0px ${({ theme }) => theme.spacings.md}px;

  gap: ${({ theme }) => theme.spacings.sm}px;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: ${({ theme }) => theme.sizes.sm}px;
  line-height: ${({ theme }) => theme.spacings.md}px;
  text-align: center;

  color: ${({ theme }) => theme.colors.gray[500]};
`;
