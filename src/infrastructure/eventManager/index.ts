import { Event, Listener } from './types';

export class EventManager {
  listeners: Map<Event, any>;

  constructor() {
    this.listeners = new Map();
  }

  on(event: Event, listener: Listener) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    this.listeners.get(event).push(listener);
  }

  emit(event: Event, payload: unknown) {
    if (!this.listeners.has(event)) {
      return;
    }

    this.listeners.get(event).forEach((listener: Listener) => {
      listener(payload);
    });
  }

  removeListener(event: Event, listenerToRemove: Listener) {
    const listeners = this.listeners.get(event);

    if (!listeners) {
      return;
    }

    const filteredListeners = listeners.filter(
      (listener: Listener) => listener !== listenerToRemove,
    );

    this.listeners.set(event, filteredListeners);
  }
}
