import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import type { TRootTabParamList } from '@src/routes/authenticated/BottomTabs/types';
import type { TCoordinates, TAddress } from '@src/types';

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
  Welcome: undefined;
  Settings: undefined;
  LocationPermission: undefined;
  PrivacyPolicy: undefined;
  DeleteAccount: undefined;
};

export type TRootStackScreenProps<T extends keyof TRootStackParamList> =
  NativeStackScreenProps<TRootStackParamList, T>;

export type THomeTabScreenProps<T extends keyof TRootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TRootTabParamList, T>,
    TRootStackScreenProps<keyof TRootStackParamList>
  >;
