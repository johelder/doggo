import { Dispatch, SetStateAction } from 'react';

export function useSplash(
  setIsLoadingAuthState: Dispatch<SetStateAction<boolean>>,
) {
  function onFinishedAuthStateLoad() {
    setIsLoadingAuthState(false);
  }

  return { onFinishedAuthStateLoad };
}
