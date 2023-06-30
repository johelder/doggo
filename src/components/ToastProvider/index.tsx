import React from 'react';

import { Toast } from './components/Toast';
import { useToastProvider } from './useToastProvider';

export function ToastProvider() {
  const { toast, handleRemoveToast } = useToastProvider();

  return (
    <Toast isVisible={!!toast} toast={toast} onRemove={handleRemoveToast} />
  );
}
