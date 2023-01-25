import React from 'react';

import {AppProvider} from '@src/providers';
import {Routes} from '@src/routes';

export function App(): JSX.Element {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}
