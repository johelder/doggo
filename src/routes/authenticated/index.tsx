import React from 'react';
import { SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components';

import { NewFeeder } from '@src/screens/NewFeeder';
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
        <Stack.Screen
          name="NewFeeder"
          component={NewFeeder}
          options={{ headerTransparent: true }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}
