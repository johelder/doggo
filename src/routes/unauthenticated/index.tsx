import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '@screens';

import { UnauthenticatedStackParamList } from './types';

const Stack = createNativeStackNavigator<UnauthenticatedStackParamList>();

export function UnauthenticatedRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
