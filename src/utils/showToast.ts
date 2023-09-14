import { EventManager } from '@lib';
import type { IToast } from '@app/src/components/ToastProvider/types';

export const toastEventManager = new EventManager();

export const showToast = ({ type, message, duration }: IToast) => {
  toastEventManager.emit('addToast', { type, message, duration });
};
