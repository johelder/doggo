import React, { ReactElement } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from '@tanstack/react-query';
import {
  RenderHookOptions,
  RenderOptions,
  render,
  renderHook,
} from '@testing-library/react-native';
import { Host } from 'react-native-portalize';
import { ThemeProvider } from 'styled-components/native';

import { ToastProvider } from '@components';
import { theme } from '@theme';

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
      gcTime: Infinity,
    },
    mutations: {
      retry: false,
      gcTime: Infinity,
    },
  },
};

function wrapAllTheProviders() {
  const queryClient = new QueryClient(queryClientConfig);

  return ({ children }: React.PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>
      <Host>
        <ThemeProvider theme={theme}>
          <NavigationContainer>{children}</NavigationContainer>
        </ThemeProvider>
      </Host>
    </QueryClientProvider>
  );
}

function wrapScreenProviders() {
  const queryClient = new QueryClient(queryClientConfig);

  return ({ children }: React.PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Host>
          <ToastProvider />
          <NavigationContainer>{children}</NavigationContainer>
        </Host>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

function customRender<T = unknown>(
  component: ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(component, { wrapper: wrapAllTheProviders(), ...options });
}

function customRenderScreen<T = unknown>(
  component: ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(component, { wrapper: wrapScreenProviders(), ...options });
}

function customRenderHook<Result, Props>(
  renderCallback: (props: Props) => Result,
  options?: Omit<RenderHookOptions<Props>, 'wrapper'>,
) {
  return renderHook(renderCallback, {
    wrapper: wrapAllTheProviders(),
    ...options,
  });
}

export { customRender as render };
export { customRenderHook as renderHook };
export { customRenderScreen as renderScreen };

export * from '@testing-library/react-native';
