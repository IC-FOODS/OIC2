/**
 * Workflow type definitions for step-by-step execution.
 */

export interface WorkflowStep {
  id: string;
  label: string;
  component: string; // Maps to UI component
}

export interface WorkflowDefinition {
  id: string;
  label: string;
  steps: WorkflowStep[];
}
