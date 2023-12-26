import { Toast } from '../../types';

export interface ToastProps {
  isVisible: boolean;
  toast: Toast | null;
  onRemove: () => void;
}
