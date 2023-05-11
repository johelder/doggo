import { DrawerNavigationOptions } from '@react-navigation/drawer';
import { theme } from '@src/styles/theme';

export const DrawerStyles: DrawerNavigationOptions = {
  headerTransparent: true,
  headerTitle: '',
  headerLeftContainerStyle: {
    backgroundColor: theme.colors.utils.white,
    width: 60,
    height: 60,
    marginTop: 15,
    marginLeft: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTintColor: theme.colors.gray[700],
  drawerActiveBackgroundColor: theme.colors.utils.white,
  drawerActiveTintColor: theme.colors.gray[700],
  drawerInactiveTintColor: theme.colors.gray[500],
};
