import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import { theme } from '@theme';

import {
  TAB_BAR_BORDER_RADIUS,
  TAB_BAR_BOTTOM_SPACING,
  TAB_BAR_ITEM_BORDER_RADIUS,
  TAB_BAR_ITEM_MARGIN,
  TAB_BAR_LEFT_SPACING,
  TAB_BAR_RIGHT_SPACING,
} from './constants';

export const containerStyles = {
  flex: 1,
};

export const tabBarOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarInactiveTintColor: theme.colors.gray[500],
  tabBarActiveTintColor: theme.colors.orange[200],
  tabBarActiveBackgroundColor: theme.colors.orange[300],
  tabBarLabelStyle: {
    fontFamily: theme.fonts.primary.semiBold,
  },
  tabBarStyle: {
    position: 'absolute',
    bottom: TAB_BAR_BOTTOM_SPACING,
    left: TAB_BAR_LEFT_SPACING,
    right: TAB_BAR_RIGHT_SPACING,
    borderRadius: TAB_BAR_BORDER_RADIUS,
    backgroundColor: theme.colors.gray[100],
  },
  tabBarItemStyle: {
    borderRadius: TAB_BAR_ITEM_BORDER_RADIUS,
    margin: TAB_BAR_ITEM_MARGIN,
  },
};
