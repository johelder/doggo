import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { TRootTabParamList } from './BottomTabs/types';

export type TRootStackParamList = {
  HomeTabs: BottomTabNavigationProp<TRootTabParamList>;
  NewFeeder: undefined;
};

export type TNavigationProps<
  T extends keyof TRootStackParamList,
  K extends keyof TRootTabParamList,
> = NativeStackScreenProps<TRootStackParamList, T, K>;
