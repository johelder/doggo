import React from 'react';

import Geolocation from '@react-native-community/geolocation';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/firestore';
import { enableLatestRenderer } from 'react-native-maps';

import {
  FIRESTORE_EMULATOR_HOST,
  FIRESTORE_EMULATOR_PORT,
  FIREBASE_AUTH_EMULATOR_URL,
} from '@data';
import { AppProvider } from '@providers';
import { Routes } from '@routes';

enableLatestRenderer();
Geolocation.setRNConfiguration({
  skipPermissionRequests: true,
});

if (__DEV__) {
  firebase().useEmulator(FIRESTORE_EMULATOR_HOST, FIRESTORE_EMULATOR_PORT);
  auth().useEmulator(FIREBASE_AUTH_EMULATOR_URL);
}

export function App(): React.JSX.Element {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}
