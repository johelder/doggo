import { useCallback, useEffect, useState } from 'react';

import { toastEventManager } from '@utils';

import type { Toast } from './types';

export function useToastProvider() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const handleAddToast = useCallback(({ type, message, duration }: Toast) => {
    setToasts([
      {
        id: Math.random(),
        type,
        message,
        duration,
      },
    ]);
  }, []);

  const handleRemoveToast = useCallback(() => {
    setToasts([]);
  }, []);

  useEffect(() => {
    toastEventManager.on('addToast', handleAddToast);

    return () => toastEventManager.removeListener('addToast', handleAddToast);
  }, [handleAddToast]);

  return { toasts, handleRemoveToast };
}
