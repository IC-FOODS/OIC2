/**
 * Schema inference utility to detect primary key and foreign key columns.
 */
import { ParsedCSV } from '../services/csvImporter';
import { TableSchema } from '../services/relationalGraphBuilder';

export function inferSchema(csv: ParsedCSV): TableSchema {
  const { filename, headers } = csv;
  const tableName = filename.replace(/\.csv$/i, '');
  const primaryKey = headers[0];

  const foreignKeys: Record<string, string> = {};
  headers.forEach(h => {
    if (h.endsWith('_id')) {
      const ref = h.replace(/_id$/, '');
      foreignKeys[h] = ref;
    }
  });

  return {
    tableName,
    primaryKey,
    foreignKeys
  };
}
