/**
 * inferRelationalSchema.ts
 *
 * Attempts to identify primary keys and foreign key relationships
 * between parsed CSV tables.
 */

import { ParsedTable } from '../utils/CSVParser';

export interface RelationalTable {
  name: string;
  columns: string[];
  primaryKey?: string;
  foreignKeys?: { column: string; references: string }[];
}

export interface RelationalSchema {
  tables: RelationalTable[];
}

export function inferSchema(tables: ParsedTable[]): RelationalSchema {
  const schema: RelationalSchema = { tables: [] };

  for (const table of tables) {
    const { name, headers, rows } = table;

    let primaryKey: string | undefined;
    for (const header of headers) {
      const values = rows.map(r => r[header]);
      const unique = new Set(values);
      if (unique.size === values.length) {
        primaryKey = header;
        break;
      }
    }

    const foreignKeys: { column: string; references: string }[] = [];

    for (const other of tables) {
      if (other.name === name) continue;
      for (const col of headers) {
        if (other.headers.includes(col)) {
          foreignKeys.push({ column: col, references: other.name });
        }
      }
    }

    schema.tables.push({
      name,
      columns: headers,
      primaryKey,
      foreignKeys: foreignKeys.length ? foreignKeys : undefined
    });
  }

  return schema;
}
