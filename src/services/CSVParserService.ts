/**
 * CSVParserService.ts
 *
 * Wraps CSV parsing logic in a microservice.
 */

import { BaseService } from './BaseService';
import { parseCSV, ParsedTable } from '../utils/CSVParser';

export class CSVParserService implements BaseService {
  id = "csv-parser";
  name = "CSV Parser Service";

  async parse(csvText: string, tableName: string): Promise<ParsedTable> {
    return await parseCSV(csvText, tableName);
  }
}
