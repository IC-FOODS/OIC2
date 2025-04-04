/**
 * ServiceRegistry.ts
 *
 * Central registry for OIC2 modular services.
 */

import { BaseService } from './BaseService';

class ServiceRegistry {
  private services = new Map<string, BaseService>();

  register(service: BaseService): void {
    if (this.services.has(service.id)) {
      console.warn(`Service with ID '${service.id}' is already registered.`);
    }
    this.services.set(service.id, service);
  }

  get<T extends BaseService>(id: string): T | undefined {
    return this.services.get(id) as T;
  }

  list(): BaseService[] {
    return Array.from(this.services.values());
  }

  clear(): void {
    this.services.clear();
  }
}

export const serviceRegistry = new ServiceRegistry();
