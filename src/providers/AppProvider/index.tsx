import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Host } from 'react-native-portalize';

import { AuthContextProvider, MapProvider, FavoriteProvider } from '@hooks';
import { ToastProvider } from '@components';

import { ThemeProvider } from 'styled-components/native';
import { theme } from '@theme';

import type { IAppProviderProps } from './types';

export function AppProvider({ children }: IAppProviderProps) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <Host>
          <AuthContextProvider>
            <FavoriteProvider>
              <ToastProvider />
              <MapProvider>{children}</MapProvider>
            </FavoriteProvider>
          </AuthContextProvider>
        </Host>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
