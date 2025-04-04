/**
 * WorkflowEngine manages the execution of step-by-step workflows.
 * Each step has a component and an optional handler function.
 */
import { eventBus } from '../eventbus/EventBus';
import { WorkflowDefinition } from './types/types';

export class WorkflowEngine {
  private currentStepIndex = 0;
  private context: any = {};
  private definition: WorkflowDefinition | null = null;

  /**
   * Start a new workflow.
   * @param def - The workflow definition
   */
  start(def: WorkflowDefinition): void {
    this.definition = def;
    this.currentStepIndex = 0;
    this.context = {};
    this.emitCurrentStep();
  }

  /**
   * Move to the next step with optional updated data.
   * @param data - New data to merge into workflow context
   */
  next(data?: any): void {
    if (data) {
      this.context = { ...this.context, ...data };
    }
    this.currentStepIndex++;
    this.emitCurrentStep();
  }

  /**
   * Go back to the previous step.
   */
  previous(): void {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.emitCurrentStep();
    }
  }

  private emitCurrentStep(): void {
    if (!this.definition) return;
    const step = this.definition.steps[this.currentStepIndex];
    if (step) {
      eventBus.emit('workflow:step', { step, context: this.context });
    } else {
      eventBus.emit('workflow:complete', this.context);
    }
  }
}

export const workflowEngine = new WorkflowEngine();
