import type { DrawerScreenProps } from '@react-navigation/drawer';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { TRootDrawerParamList } from './HomeDrawer/types';

export type TRootStackParamList = {
  HomeTabs: DrawerScreenProps<TRootDrawerParamList>;
};

export type TNavigationProps<T extends keyof TRootStackParamList> =
  NativeStackNavigationProp<TRootStackParamList, T>;
