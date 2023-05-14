import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '@src/screens';
import { TabBarIcon } from '@src/components';

import { SafeAreaView } from 'react-native';
import { containerStyles, tabBarOptions } from './styles';
import { TRootTabParamList } from './types';

const Tab = createBottomTabNavigator<TRootTabParamList>();

export function AuthenticatedRoutes() {
  return (
    <SafeAreaView style={containerStyles}>
      <Tab.Navigator screenOptions={tabBarOptions}>
        <Tab.Screen
          name="Map"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon isFocused={focused} screen="map" />
            ),
            tabBarLabel: 'Mapa',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon isFocused={focused} screen="profile" />
            ),
            tabBarLabel: 'Perfil',
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
