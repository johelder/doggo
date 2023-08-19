import React from 'react';

import { AppProvider } from '@src/providers';
import { Routes } from '@src/routes';

import { enableLatestRenderer } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

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
