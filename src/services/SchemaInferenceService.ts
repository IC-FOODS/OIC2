/**
 * SchemaInferenceService.ts
 *
 * Wraps the inferRelationalSchema logic into a BaseService interface.
 */

import { BaseService } from './BaseService';
import { ParsedTable } from '../utils/CSVParser';
import { inferSchema, RelationalSchema } from '../schema/inferRelationalSchema';

export class SchemaInferenceService implements BaseService {
  id = "schema-inference";
  name = "Schema Inference Service";

  /**
   * Infers primary/foreign key relationships from a list of ParsedTables.
   */
  async infer(tables: ParsedTable[]): Promise<RelationalSchema> {
    return inferSchema(tables);
  }
}
