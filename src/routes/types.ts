import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppTabBottomTabParamList } from './authenticated/BottomTabs/types';
import { AuthenticatedStackParamList } from './authenticated/types';
import { UnauthenticatedStackParamList } from './unauthenticated/types';

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends AuthenticatedStackParamList,
        AppTabBottomTabParamList {}
  }
}

export type AppScreenProps<T extends keyof AuthenticatedStackParamList> =
  NativeStackScreenProps<AuthenticatedStackParamList, T>;

export type AuthScreenProps<T extends keyof UnauthenticatedStackParamList> =
  NativeStackScreenProps<UnauthenticatedStackParamList, T>;

export type AppTabScreenProps<T extends keyof AppTabBottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<AppTabBottomTabParamList, T>,
    NativeStackScreenProps<AuthenticatedStackParamList, 'HomeTabs'>
  >;
