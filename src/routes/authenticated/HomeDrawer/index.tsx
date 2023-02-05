import React from 'react';
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import { useTheme } from 'styled-components';

import House from 'phosphor-react-native/src/icons/House';
import Heart from 'phosphor-react-native/src/icons/Heart';
import CookingPot from 'phosphor-react-native/src/icons/CookingPot';

import { Home } from '@src/screens';
import { CustomDrawerContent } from '@src/components';

import type { TRootDrawerParamList } from './types';

const Drawer = createDrawerNavigator<TRootDrawerParamList>();

export function HomeDrawer() {
  const theme = useTheme();

  const DrawerStyles: DrawerNavigationOptions = {
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

  return (
    <Drawer.Navigator
      screenOptions={DrawerStyles}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: 'Início',
          drawerIcon: ({ focused }) => (
            <House
              size={24}
              color={focused ? theme.colors.gray[700] : theme.colors.gray[500]}
              weight={focused ? 'fill' : 'regular'}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="MyFeeders"
        component={Home}
        options={{
          drawerLabel: 'Meus comedouros',
          drawerIcon: ({ focused }) => (
            <CookingPot
              size={24}
              color={focused ? theme.colors.gray[700] : theme.colors.gray[500]}
              weight={focused ? 'fill' : 'regular'}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Favorites"
        component={Home}
        options={{
          drawerLabel: 'Favoritos',
          drawerIcon: ({ focused }) => (
            <Heart
              size={24}
              color={focused ? theme.colors.gray[700] : theme.colors.gray[500]}
              weight={focused ? 'fill' : 'regular'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
