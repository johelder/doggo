import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TRootTabParamList } from '@src/routes/authenticated/BottomTabs/types';

type TAppScreens = TRootTabParamList & TRootStackParamList;

export type TRootStackParamList = {
  HomeTabs: NavigatorScreenParams<TRootTabParamList>;
  NewFeeder: undefined;
};

export type TDefaultScreensProps<T extends keyof TAppScreens> =
  NativeStackScreenProps<TAppScreens, T>;
