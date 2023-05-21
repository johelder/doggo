import React from 'react';
import type { IAppProviderProps } from './types';

import { AuthContextProvider, MapProvider } from '@src/hooks';

import { ThemeProvider } from 'styled-components/native';
import { theme } from '@src/styles/theme';

export function AppProvider({ children }: IAppProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <MapProvider>{children}</MapProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}
