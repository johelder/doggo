import { IToast } from '../../types';

export interface IToastProps {
  isVisible: boolean;
  toast: IToast | null;
  onRemove: () => void;
}
