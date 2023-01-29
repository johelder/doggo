import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '@src/hooks';

import { UnauthenticatedRoutes } from './unauthenticated.routes';
import { AuthenticatedRoutes } from './authenticated.routes';

export function Routes() {
  const { isUserLogged } = useAuth();

  return (
    <NavigationContainer>
      {isUserLogged ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
    </NavigationContainer>
  );
}
