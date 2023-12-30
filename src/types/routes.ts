import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { TCoordinates, TAddress } from '@types';

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
    feederOwner: string | null;
  };
  Welcome: undefined;
  Settings: undefined;
  LocationPermission: undefined;
  PrivacyPolicy: undefined;
  TermsOfUse: undefined;
  DeleteAccount: undefined;
};

export type TRootTabParamList = {
  Map: undefined;
  SelectLocationStack: undefined;
  Profile: undefined;
};

export type TRootStackScreenProps<T extends keyof TRootStackParamList> =
  NativeStackScreenProps<TRootStackParamList, T>;

export type THomeTabScreenProps<T extends keyof TRootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TRootTabParamList, T>,
    TRootStackScreenProps<keyof TRootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TRootStackParamList, TRootTabParamList {}
  }
}
