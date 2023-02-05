import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeDrawer } from './HomeDrawer';

const Stack = createNativeStackNavigator();

export function AuthenticatedRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeDrawer"
        component={HomeDrawer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
