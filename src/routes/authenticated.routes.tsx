import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '@src/screens';
import { TabBarIcon } from '@src/components/TabBarIcon';

import { useTheme } from 'styled-components';

const Tab = createBottomTabNavigator();

export function AuthenticatedRoutes() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: theme.colors.gray[500],
        tabBarActiveTintColor: theme.colors.gray[700],
        tabBarLabelStyle: {
          fontFamily: theme.fonts.primary.semiBold,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon isFocused={focused} screen="home" />
          ),
          tabBarLabel: 'Início',
        }}
      />
      <Tab.Screen
        name="NearbyFeeders"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon isFocused={focused} screen="nearbyFeeders" />
          ),
          tabBarLabel: 'Mapa',
        }}
      />
      <Tab.Screen
        name="CreateFeeder"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon isFocused={focused} screen="createFeeder" />
          ),
          tabBarLabel: 'Novo',
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
  );
}
