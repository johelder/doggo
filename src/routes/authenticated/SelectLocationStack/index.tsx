import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderBackButton } from '@react-navigation/elements';
import { useTheme } from 'styled-components/native';

import { SelectLocation } from '@screens';

const Stack = createNativeStackNavigator();

export function SelectLocationStack() {
  const theme = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SelectLocation"
        component={SelectLocation}
        options={({ navigation }) => ({
          headerTintColor: theme.colors.orange[500],
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerLeft: props => (
            <HeaderBackButton {...props} onPress={() => navigation.goBack()} />
          ),
        })}
      />
    </Stack.Navigator>
  );
}
