/**
 * relationalGraphBuilder.ts
 *
 * Converts a relational schema + table data into RDF-style quads.
 */

import { ParsedTable } from '../utils/CSVParser';
import { RelationalSchema } from '../schema/inferRelationalSchema';

export interface Quad {
  subject: string;
  predicate: string;
  object: string;
  graph?: string;
}

export function buildGraph(tables: ParsedTable[], schema: RelationalSchema): Quad[] {
  const quads: Quad[] = [];

  for (const table of schema.tables) {
    const source = tables.find(t => t.name === table.name);
    if (!source) continue;

    for (const row of source.rows) {
      const subj = `${table.name}/${row[table.primaryKey ?? 'id']}`;

      for (const col of table.columns) {
        const obj = row[col];
        if (!obj) continue;

        const fk = table.foreignKeys?.find(fk => fk.column === col);
        if (fk) {
          quads.push({ subject: subj, predicate: `rel:${col}`, object: `${fk.references}/${obj}` });
        } else {
          quads.push({ subject: subj, predicate: `data:${col}`, object: obj });
        }
      }
    }
  }

  return quads;
}
