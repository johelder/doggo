import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {UnauthenticatedRoutes} from './unauthenticated.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <UnauthenticatedRoutes />
    </NavigationContainer>
  );
}
