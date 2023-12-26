import { Toast } from '@components';
import { EventManager } from '@lib';

export const toastEventManager = new EventManager();

export const showToast = ({ type, message, duration }: Toast) => {
  toastEventManager.emit('addToast', { type, message, duration });
};
