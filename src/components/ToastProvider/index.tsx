import React from 'react';

import { Toast } from './components/Toast';
import * as Styled from './styles';
import { useToastProvider } from './useToastProvider';

export function ToastProvider(): React.JSX.Element {
  const { toasts, handleRemoveToast } = useToastProvider();

  return (
    <Styled.Container pointerEvents={toasts.length > 0 ? 'auto' : 'none'}>
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          isVisible={!!toast}
          toast={toast}
          onRemove={handleRemoveToast}
        />
      ))}
    </Styled.Container>
  );
}
