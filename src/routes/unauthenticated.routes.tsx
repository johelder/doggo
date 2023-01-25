import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignIn} from '@src/screens';

const Stack = createNativeStackNavigator();

export function UnauthenticatedRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}
