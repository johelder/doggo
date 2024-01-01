export type ToastType = 'success' | 'error' | 'warning';

export interface Toast {
  id?: number;
  type: ToastType;
  message: string;
  duration?: number;
}
