import React from 'react';
import { SafeAreaView } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { mockedAddress, mockedLocation } from '@test';
import { useTheme } from 'styled-components/native';

import { IS_FIRST_ACCESS_KEY, useStorage } from '@hooks';
import {
  CreateFeeder,
  MyFeeders,
  EditFeeder,
  Favorites,
  FeederDetails,
  Settings,
  LocationPermission,
  PrivacyPolicy,
  DeleteAccount,
  TermsOfUse,
  SelectLocation,
} from '@screens';

import { HomeTabs } from './BottomTabs';
import { AuthenticatedStackParamList, AuthenticatedStackProps } from './types';

const Stack = createNativeStackNavigator<AuthenticatedStackParamList>();

const wrapperOptions = {
  flex: 1,
};

export function AuthenticatedRoutes({
  initialRouteName,
}: AuthenticatedStackProps) {
  const theme = useTheme();
  const { storedValue: isFirstAccess } = useStorage(IS_FIRST_ACCESS_KEY, true);

  function getInitialRouteName(): keyof AuthenticatedStackParamList {
    if (initialRouteName) {
      return initialRouteName;
    }

    return isFirstAccess ? 'LocationPermission' : 'HomeTabs';
  }

  return (
    <SafeAreaView style={wrapperOptions}>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: theme.colors.orange[500],
          headerTitleAlign: 'center',
          headerShadowVisible: false,
        }}
        initialRouteName={getInitialRouteName()}>
        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name="LocationPermission"
            component={LocationPermission}
          />
          <Stack.Screen name="HomeTabs" component={HomeTabs} />
        </Stack.Group>
        <Stack.Group screenOptions={{ headerTransparent: true }}>
          <Stack.Screen name="SelectLocation" component={SelectLocation} />
          <Stack.Screen
            name="CreateFeeder"
            component={CreateFeeder}
            options={{ headerTitle: '' }}
            initialParams={{
              address: mockedAddress,
              coordinate: mockedLocation,
            }}
          />
          <Stack.Screen
            name="EditFeeder"
            component={EditFeeder}
            options={{ headerTitle: '' }}
          />
        </Stack.Group>

        <Stack.Group
          screenOptions={{
            headerTitleStyle: {
              fontFamily: theme.fonts.primary.semiBold,
              fontSize: 14,
              color: theme.colors.gray[700],
            },
          }}>
          <Stack.Screen
            name="MyFeeders"
            component={MyFeeders}
            options={{
              headerTitle: 'MEUS COMEDOUROS',
            }}
          />
          <Stack.Screen
            name="Favorites"
            component={Favorites}
            options={{
              headerTitle: 'FAVORITOS',
            }}
          />
          <Stack.Screen
            name="FeederDetails"
            component={FeederDetails}
            options={({ route }) => ({
              title: `COMEDOURO DE ${route.params.feederOwner
                ?.split(' ')[0]
                .toUpperCase()}`,
            })}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
              headerTitle: 'CONFIGURAÇÕES',
            }}
          />
          <Stack.Screen
            name="PrivacyPolicy"
            component={PrivacyPolicy}
            options={{
              headerTitle: 'POLÍTICA DE PRIVACIDADE',
            }}
          />
          <Stack.Screen
            name="TermsOfUse"
            component={TermsOfUse}
            options={{
              headerTitle: 'TERMOS DE USO',
            }}
          />
          <Stack.Screen
            name="DeleteAccount"
            component={DeleteAccount}
            options={{
              headerTitle: 'EXCLUIR MINHA CONTA',
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </SafeAreaView>
  );
}
