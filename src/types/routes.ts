import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AddressDomain } from '@data';
import { Location } from '@domain';

export type TRootStackParamList = {
  HomeTabs: NavigatorScreenParams<TRootTabParamList>;
  SelectLocation: { feederId?: string; location?: Location } | undefined;
  EditFeeder: {
    feederId: string;
    address: AddressDomain;
    coordinate: Location;
  };
  CreateFeeder: {
    address: AddressDomain;
    coordinate: Location;
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
