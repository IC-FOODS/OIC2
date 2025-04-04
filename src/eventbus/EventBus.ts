/**
 * EventBus provides a simple pub-sub messaging system for loosely coupled components.
 */
type EventHandler = (payload: any) => void;

class EventBus {
  private handlers: Map<string, EventHandler[]> = new Map();

  on(event: string, handler: EventHandler): void {
    if (!this.handlers.has(event)) {
      this.handlers.set(event, []);
    }
    this.handlers.get(event)!.push(handler);
  }

  off(event: string, handler: EventHandler): void {
    const listeners = this.handlers.get(event);
    if (!listeners) return;
    this.handlers.set(event, listeners.filter(h => h !== handler));
  }

  emit(event: string, payload: any): void {
    const listeners = this.handlers.get(event);
    if (listeners) {
      listeners.forEach(handler => handler(payload));
    }
  }
}

export const eventBus = new EventBus();
