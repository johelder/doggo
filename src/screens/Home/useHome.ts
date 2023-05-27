import { useState } from 'react';

export function useHome() {
  const [isLoadingMap, setIsLoadingMap] = useState(true);

  function onMapLoaded() {
    setIsLoadingMap(false);
  }

  return { isLoadingMap, onMapLoaded };
}
