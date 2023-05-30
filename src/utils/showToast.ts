import EventManager from '@src/lib/eventManager';
import type { IToast } from '@src/components/ToastProvider/types';

export const toastEventManager = new EventManager();

export const showToast = ({ type, message, duration }: IToast) => {
  toastEventManager.emit('addToast', { type, message, duration });
};
