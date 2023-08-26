import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '@src/hooks';
import { Splash } from '@src/screens';

import { UnauthenticatedRoutes } from './unauthenticated';
import { AuthenticatedRoutes } from './authenticated';

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
