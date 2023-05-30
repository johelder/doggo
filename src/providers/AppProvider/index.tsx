import React from 'react';

import { AuthContextProvider, MapProvider } from '@src/hooks';
import { ToastProvider } from '@src/components';

import { ThemeProvider } from 'styled-components/native';
import { theme } from '@src/styles/theme';

import type { IAppProviderProps } from './types';

export function AppProvider({ children }: IAppProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <ToastProvider />
        <MapProvider>{children}</MapProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}
