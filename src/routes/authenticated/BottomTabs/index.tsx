import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, Profile } from '@src/screens';
import { CustomTabBar } from '@src/components';

import { tabBarOptions } from './options';
import type { TRootTabParamList } from './types';

const Tab = createBottomTabNavigator<TRootTabParamList>();

export function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={tabBarOptions}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="Map"
        component={Home}
        options={{
          tabBarLabel: 'Mapa',
          tabBarIcon: () => 'map',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: () => 'profile',
        }}
      />
    </Tab.Navigator>
  );
}
