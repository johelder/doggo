import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { UnauthenticatedRoutes } from './unauthenticated.routes';
import { AuthenticatedRoutes } from './authenticated.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <AuthenticatedRoutes />
    </NavigationContainer>
  );
}
