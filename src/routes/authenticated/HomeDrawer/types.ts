import type { DrawerNavigationProp } from '@react-navigation/drawer';

export type TRootDrawerParamList = {
  Home: undefined;
  MyFeeders: undefined;
  Favorites: undefined;
};

export type TNavigationDrawerProps<T extends keyof TRootDrawerParamList> =
  DrawerNavigationProp<TRootDrawerParamList, T>;
