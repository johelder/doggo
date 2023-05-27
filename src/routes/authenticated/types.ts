import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TAddress } from '@src/models';
import { TRootTabParamList } from '@src/routes/authenticated/BottomTabs/types';

type TAppScreens = TRootTabParamList & TRootStackParamList;

export type TRootStackParamList = {
  HomeTabs: NavigatorScreenParams<TRootTabParamList>;
  SelectLocation: undefined;
  CreateFeeder: {
    address: TAddress;
    coordinate: {
      latitude: number;
      longitude: number;
    };
  };
};

export type TDefaultScreensProps<T extends keyof TAppScreens> =
  NativeStackScreenProps<TAppScreens, T>;
