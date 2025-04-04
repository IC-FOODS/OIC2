/**
 * CSVParser.ts
 *
 * Utility for converting CSV text to structured rows.
 */

export interface ParsedTable {
  name: string;
  headers: string[];
  rows: Record<string, string>[];
}

export async function parseCSV(content: string, name: string): Promise<ParsedTable> {
  const lines = content.split(/\r?\n/).filter(Boolean);
  const headers = lines[0].split(',').map(h => h.trim());
  const rows = lines.slice(1).map(line => {
    const values = line.split(',');
    const row: Record<string, string> = {};
    headers.forEach((h, i) => row[h] = values[i]?.trim() ?? '');
    return row;
  });
  return { name, headers, rows };
}
