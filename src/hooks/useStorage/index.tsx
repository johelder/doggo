import { useCallback, useState } from 'react';

import { MMKV } from 'react-native-mmkv';

import { STORAGE_KEY } from './constants';

export const storage = new MMKV({
  id: STORAGE_KEY,
});

export function useStorage<T>(
  key: string,
  initialValue: T,
): { storedValue: T; setValueInStorage: (value: T) => void } {
  const [state, setState] = useState(() => {
    const storedValue = storage.getString(key);

    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  const setValueInStorage = useCallback(
    (value: T) => {
      setState(value);
      storage.set(key, JSON.stringify(value));
    },
    [key],
  );

  return { storedValue: state, setValueInStorage };
}
