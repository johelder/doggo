import type {
  NavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { TDomainAddress } from '@src/types/domain';
import type { TRootTabParamList } from '@src/routes/authenticated/BottomTabs/types';
import type { TCoordinates } from '@src/types/common';

type TAppScreens = TRootTabParamList & TRootStackParamList;

export type TRootStackParamList = {
  HomeTabs: NavigatorScreenParams<TRootTabParamList>;
  SelectLocation: { feederId?: string } | undefined;
  CreateFeeder: {
    address: TDomainAddress;
    coordinate: TCoordinates;
  };
  MyFeeders: undefined;
};

export type TDefaultScreensProps<T extends keyof TAppScreens> =
  NativeStackScreenProps<TAppScreens, T>;

export type TNavigationProps<T extends keyof TAppScreens> = NavigationProp<
  TAppScreens,
  T
>;

export type TRouteProps<T extends keyof TAppScreens> = RouteProp<
  TAppScreens,
  T
>;
