import { TEvent, TListener } from './types';

export default class EventManager {
  listeners: Map<TEvent, any>;

  constructor() {
    this.listeners = new Map();
  }

  on(event: TEvent, listener: TListener) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    this.listeners.get(event).push(listener);
  }

  emit(event: TEvent, payload: unknown) {
    if (!this.listeners.has(event)) {
      return;
    }

    this.listeners.get(event).forEach((listener: TListener) => {
      listener(payload);
    });
  }

  removeListener(event: TEvent, listenerToRemove: TListener) {
    const listeners = this.listeners.get(event);

    if (!listeners) {
      return;
    }

    const filteredListeners = listeners.filter(
      (listener: TListener) => listener !== listenerToRemove,
    );

    this.listeners.set(event, filteredListeners);
  }
}
