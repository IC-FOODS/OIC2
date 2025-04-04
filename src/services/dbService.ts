/**
 * Dexie-based IndexedDB wrapper for persistent graph-related data storage.
 */
import Dexie, { Table } from 'dexie';

export interface UserGraphNode {
  id: string;
  label: string;
  type: string;
}

export interface SystemGraphNode {
  id: string;
  iri: string;
  label: string;
}

class OIC2DB extends Dexie {
  userGraphNodes!: Table<UserGraphNode, string>;
  systemGraphNodes!: Table<SystemGraphNode, string>;

  constructor() {
    super('OIC2DB');
    this.version(1).stores({
      userGraphNodes: 'id,label,type',
      systemGraphNodes: 'id,iri,label'
    });
  }
}

export const db = new OIC2DB();
