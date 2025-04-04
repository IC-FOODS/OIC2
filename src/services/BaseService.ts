/**
 * BaseService.ts
 *
 * This is the common interface that all OIC2 services must implement.
 * Services are modular and can be registered into the ServiceRegistry.
 */

export interface BaseService {
  id: string;
  name?: string;
  initialize?(options?: Record<string, any>): Promise<void>;
  destroy?(): void;
}
