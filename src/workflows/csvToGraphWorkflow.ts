/**
 * Example workflow definition for importing CSV and building a semantic graph.
 */
import { WorkflowDefinition } from './types/types';

export const csvToGraphWorkflow: WorkflowDefinition = {
  id: 'csv-import-001',
  label: 'CSV to Graph Workflow',
  steps: [
    { id: 'select-files', label: 'Select CSV Files', component: 'CSVFileSelector' },
    { id: 'infer-schema', label: 'Infer Schema', component: 'SchemaPreview' },
    { id: 'map-columns', label: 'Map Columns', component: 'ColumnMapper' },
    { id: 'resolve-terms', label: 'Resolve Terms', component: 'TermResolver' },
    { id: 'build-graph', label: 'Build Graph', component: 'GraphBuilder' },
    { id: 'review', label: 'Review & Finalize', component: 'ReviewGraph' }
  ]
};
