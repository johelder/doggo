import React from 'react';
import {IAppProviderProps} from './types';

import {ThemeProvider} from 'styled-components/native';
import {theme} from '@styles/theme';

export function AppProvider({children}: IAppProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
