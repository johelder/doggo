import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NewFeeder } from '@src/screens/NewFeeder';
import { HomeTabs } from './BottomTabs';
import { SafeAreaView } from 'react-native';
import { TRootStackParamList } from './types';

const Stack = createNativeStackNavigator<TRootStackParamList>();

const wrapperOptions = {
  flex: 1,
};

export function AuthenticatedRoutes() {
  return (
    <SafeAreaView style={wrapperOptions}>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="NewFeeder" component={NewFeeder} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}
