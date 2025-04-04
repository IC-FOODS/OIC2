/**
 * CSV Importer: Loads and parses a CSV file into headers and rows.
 */
export interface ParsedCSV {
  filename: string;
  headers: string[];
  rows: Record<string, string>[];
}

export async function parseCSVFile(file: File): Promise<ParsedCSV> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      const text = event.target?.result as string;
      const lines = text.split('\n').map(line => line.trim()).filter(Boolean);
      const headers = lines[0].split(',');
      const rows = lines.slice(1).map(line => {
        const values = line.split(',');
        const row: Record<string, string> = {};
        headers.forEach((h, i) => row[h] = values[i] || '');
        return row;
      });
      resolve({ filename: file.name, headers, rows });
    };
    reader.onerror = reject;
    reader.readAsText(file);
  });
}
