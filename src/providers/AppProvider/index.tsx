import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Host } from 'react-native-portalize';
import { ThemeProvider } from 'styled-components/native';

import { ToastProvider } from '@components';
import { AuthContextProvider, MapProvider } from '@domain';
import { theme } from '@theme';

import { IAppProviderProps } from './types';

const queryClient = new QueryClient();

export function AppProvider({ children }: IAppProviderProps) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Host>
            <AuthContextProvider>
              <ToastProvider />
              <MapProvider>{children}</MapProvider>
            </AuthContextProvider>
          </Host>
        </ThemeProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
