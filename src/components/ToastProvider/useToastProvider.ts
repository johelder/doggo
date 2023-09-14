import { useCallback, useEffect, useState } from 'react';

import { toastEventManager } from '@utils';

import type { IToast } from './types';

export function useToastProvider() {
  const [toast, setToast] = useState<IToast | null>(null);

  const handleAddToast = useCallback(({ type, message, duration }: IToast) => {
    setToast({
      type,
      message,
      duration,
    });
  }, []);

  const handleRemoveToast = useCallback(() => {
    setToast(null);
  }, []);

  useEffect(() => {
    toastEventManager.on('addToast', handleAddToast);

    return () => toastEventManager.removeListener('addToast', handleAddToast);
  }, [handleAddToast]);

  return { toast, handleRemoveToast };
}
