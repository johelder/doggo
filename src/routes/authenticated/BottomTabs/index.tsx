import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from '@components';
import { Home, NewFeederButton, Profile } from '@screens';
import { TRootTabParamList } from '@types';

import { SelectLocationStack } from '../SelectLocationStack';

import { tabBarOptions } from './options';

const Tab = createBottomTabNavigator<TRootTabParamList>();

export function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={tabBarOptions}>
      <Tab.Screen
        name="Map"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Icon name="mapPinLine" color={color} />,
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name="SelectLocationStack"
        component={SelectLocationStack}
        options={{
          tabBarButton: props => <NewFeederButton {...props} />,
          tabBarStyle: {
            display: 'none',
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <Icon name="user" color={color} />,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}
