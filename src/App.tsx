import React from 'react';

import { AppProvider } from '@src/providers';
import { Routes } from '@src/routes';

import { enableLatestRenderer } from 'react-native-maps';

enableLatestRenderer();

export function App(): JSX.Element {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}
