import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components';

import { Configurations } from '@src/screens';
import { HomeTabs } from './HomeTabs';

const Stack = createNativeStackNavigator();

export function AuthenticatedRoutes() {
  const theme = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{ headerShown: false }}
      />

      <Stack.Group
        screenOptions={{
          headerBackTitle: '',
          headerTitleStyle: {
            fontFamily: theme.fonts.primary.semiBold,
            fontSize: 14,
          },
          headerTintColor: theme.colors.gray[700],
        }}>
        <Stack.Screen
          name="Configurations"
          component={Configurations}
          options={{ title: 'CONFIGURAÇÕES' }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
