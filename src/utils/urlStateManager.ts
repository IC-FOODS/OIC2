/**
 * urlStateManager.ts
 *
 * Serializes and parses layout state, filters, and data references into/from the URL.
 * This enables deep linking to specific views and prompts users if required components are missing.
 */

export function encodeAppState(state: any): string {
  return btoa(JSON.stringify(state));
}

export function decodeAppState(encoded: string): any {
  try {
    return JSON.parse(atob(encoded));
  } catch {
    return null;
  }
}
