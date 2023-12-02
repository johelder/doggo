import { IToast } from '@app/src/components/ToastProvider/types';

import { EventManager } from '@lib';

export const toastEventManager = new EventManager();

export const showToast = ({ type, message, duration }: IToast) => {
  toastEventManager.emit('addToast', { type, message, duration });
};
