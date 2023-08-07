import type {
  NavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { TRootTabParamList } from '@src/routes/authenticated/BottomTabs/types';
import type { TCoordinates, TAddress } from '@src/types';

type TAppScreens = TRootTabParamList & TRootStackParamList;

export type TRootStackParamList = {
  HomeTabs: NavigatorScreenParams<TRootTabParamList>;
  SelectLocation: { feederId?: string } | undefined;
  EditFeeder: {
    feederId: string;
    address: TAddress;
    coordinate: TCoordinates;
  };
  CreateFeeder: {
    address: TAddress;
    coordinate: TCoordinates;
  };
  MyFeeders: undefined;
  Favorites: undefined;
  FeederDetails: {
    feederId: string;
  };
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
