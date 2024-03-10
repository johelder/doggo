export function useStorage<T>(key: string, initialValue: T) {
  return { storedValue: initialValue, setValueInStorage: () => key };
}
