import React from 'react';

import { render, waitFor, act } from 'test-utils';

import { ToastProvider } from '@components';
import { showToast } from '@utils';

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

describe('<Toast />', () => {
  it('should render, show correct message and disappear', async () => {
    const { getByText, queryByText } = render(<ToastProvider />);

    act(() => showToast({ type: 'success', message: 'success message' }));

    await waitFor(() => expect(getByText('success message')).toBeTruthy());

    act(() => jest.runAllTimers());

    expect(queryByText('success message')).toBeNull();
  });
});
