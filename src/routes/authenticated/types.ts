import { NavigatorScreenParams } from '@react-navigation/native';

import { AddressDomain } from '@data';
import { Location } from '@domain';

import { AppTabBottomTabParamList } from './BottomTabs/types';

export type AuthenticatedStackParamList = {
  HomeTabs: NavigatorScreenParams<AppTabBottomTabParamList>;
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

export interface AuthenticatedStackProps {
  initialRouteName?: keyof AuthenticatedStackParamList;
}
