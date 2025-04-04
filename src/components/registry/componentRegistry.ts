/**
 * Maps workflow step component names to actual React components.
 */
import { CSVFileSelector } from '../workflowSteps/CSVFileSelector';
import { SchemaPreview } from '../workflowSteps/SchemaPreview';
import { ColumnMapper } from '../workflowSteps/ColumnMapper';
import { TermResolver } from '../workflowSteps/TermResolver';
import { GraphBuilder } from '../workflowSteps/GraphBuilder';
import { ReviewGraph } from '../workflowSteps/ReviewGraph';

export const componentRegistry: Record<string, React.FC<any>> = {
  CSVFileSelector,
  SchemaPreview,
  ColumnMapper,
  TermResolver,
  GraphBuilder,
  ReviewGraph
};
