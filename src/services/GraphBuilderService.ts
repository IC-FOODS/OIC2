/**
 * GraphBuilderService.ts
 *
 * Wraps the RDF-style quad builder into a microservice.
 */

import { BaseService } from './BaseService';
import { buildGraph, Quad } from '../graph/relationalGraphBuilder';
import { ParsedTable } from '../utils/CSVParser';
import { RelationalSchema } from '../schema/inferRelationalSchema';

export class GraphBuilderService implements BaseService {
  id = "graph-builder";
  name = "Graph Builder Service";

  /**
   * Builds an RDF-style graph (quads) from tables + schema.
   */
  async build(tables: ParsedTable[], schema: RelationalSchema): Promise<Quad[]> {
    return buildGraph(tables, schema);
  }
}
