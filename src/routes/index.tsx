import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '@hooks';
import { Splash } from '@screens';

import { AuthenticatedRoutes } from './authenticated';
import { UnauthenticatedRoutes } from './unauthenticated';

export function Routes() {
  const { isUserLogged, isLoadingAuthState } = useAuth();

  if (isLoadingAuthState) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      {isUserLogged ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
    </NavigationContainer>
  );
}
