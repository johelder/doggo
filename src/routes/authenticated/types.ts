import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type TRootTabParamList = {
  Map: undefined;
  Profile: undefined;
};

export type TNavigationProps<T extends keyof TRootTabParamList> =
  NativeStackNavigationProp<TRootTabParamList, T>;
