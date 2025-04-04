/**
 * Relational Graph Builder: Converts parsed tables into RDF-like quads using schema inference.
 */
import { QuadStore } from './quadStore';

export interface TableSchema {
  tableName: string;
  primaryKey: string;
  foreignKeys: Record<string, string>; // column -> referencedTable
}

export function buildGraphFromTables(
  tables: Record<string, { schema: TableSchema; rows: Record<string, string>[] }>,
  store: QuadStore
) {
  for (const [tableName, { schema, rows }] of Object.entries(tables)) {
    for (const row of rows) {
      const subject = `row://${tableName}/${row[schema.primaryKey]}`;
      for (const [col, val] of Object.entries(row)) {
        if (schema.foreignKeys[col]) {
          const targetTable = schema.foreignKeys[col];
          const object = `row://${targetTable}/${val}`;
          store.add({ subject, predicate: `rel:${col}`, object, graph: 'user://relational' });
        } else {
          store.add({ subject, predicate: `attr:${col}`, object: val, graph: 'user://relational' });
        }
      }
    }
  }
}
