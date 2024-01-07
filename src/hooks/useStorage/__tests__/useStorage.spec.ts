import { renderHook, waitFor } from 'test-utils';

import { storage, useStorage } from '..';

describe('useStorage', () => {
  it('should able to set value in storage', async () => {
    const { result } = renderHook(() =>
      useStorage('test-key', 'mockedInitialValue'),
    );

    await waitFor(() => result.current.setValueInStorage('mockedNewValue'));

    expect(result.current.storedValue).toBe('mockedNewValue');
    expect(storage.getString('test-key')).toContain('mockedNewValue');
  });
});
