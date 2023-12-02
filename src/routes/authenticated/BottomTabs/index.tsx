import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapPinLine from 'phosphor-react-native/src/icons/MapPinLine';
import ProfileIcon from 'phosphor-react-native/src/icons/User';

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
          tabBarIcon: ({ color }) => <MapPinLine color={color} weight="bold" />,
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
          tabBarIcon: ({ color }) => (
            <ProfileIcon color={color} weight="bold" />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}
