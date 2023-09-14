import React from 'react';
import Geolocation from '@react-native-community/geolocation';
import { enableLatestRenderer } from 'react-native-maps';

import { AppProvider } from '@providers';
import { Routes } from '@routes';

enableLatestRenderer();
Geolocation.setRNConfiguration({
  skipPermissionRequests: true,
});

export function App(): JSX.Element {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}
