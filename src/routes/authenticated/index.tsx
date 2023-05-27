import React from 'react';
import { SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components';

import { SelectLocation, CreateFeeder } from '@src/screens';
import { HomeTabs } from './BottomTabs';

import { TRootStackParamList } from './types';

const Stack = createNativeStackNavigator<TRootStackParamList>();

const wrapperOptions = {
  flex: 1,
};

export function AuthenticatedRoutes() {
  const theme = useTheme();

  return (
    <SafeAreaView style={wrapperOptions}>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: theme.colors.primary[500],
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <Stack.Group screenOptions={{ headerTransparent: true }}>
          <Stack.Screen name="SelectLocation" component={SelectLocation} />
          <Stack.Screen
            name="CreateFeeder"
            component={CreateFeeder}
            options={{ headerTitle: '' }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </SafeAreaView>
  );
}
