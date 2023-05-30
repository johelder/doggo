import { IToast } from '@src/components/ToastProvider/types';
import EventManager from '@src/lib/eventManager';

export const toastEventManager = new EventManager();

export const showToast = ({ type, message, duration }: IToast) => {
  toastEventManager.emit('addToast', { type, message, duration });
};
