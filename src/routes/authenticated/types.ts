import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TRootTabParamList } from './HomeTabs/types';

export type TRootStackParamList = {
  HomeTabs: BottomTabScreenProps<TRootTabParamList>;
  Configurations: undefined;
};

export type TNavigationProps<T extends keyof TRootStackParamList> =
  NativeStackNavigationProp<TRootStackParamList, T>;
