import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { AuthContextProvider, MapProvider, FavoriteProvider } from '@src/hooks';
import { ToastProvider } from '@src/components';

import { ThemeProvider } from 'styled-components/native';
import { theme } from '@src/styles/theme';

import type { IAppProviderProps } from './types';

export function AppProvider({ children }: IAppProviderProps) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <FavoriteProvider>
            <ToastProvider />
            <MapProvider>{children}</MapProvider>
          </FavoriteProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
