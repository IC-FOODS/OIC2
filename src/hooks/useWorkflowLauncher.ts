/**
 * useWorkflowLauncher.ts (Merged)
 *
 * Hook to orchestrate workflows and modals in OIC2.
 * - Manages parsed table state
 * - Launches modal dialogs for importing CSV and vocabularies
 * - Wires up graph build pipeline using registered services
 */

import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { panelRegistry } from '../registry/panelRegistry';
import { ParsedTable } from '../utils/CSVParser';
import { serviceRegistry } from '../services/ServiceRegistry';
import { SchemaInferenceService } from '../services/SchemaInferenceService';
import { GraphBuilderService } from '../services/GraphBuilderService';

export function useWorkflowLauncher() {
  // Modal state controls
  const datasetModal = useDisclosure();
  const vocabModal = useDisclosure();

  // Data state: parsed CSV tables
  const [parsedTables, setParsedTables] = useState<ParsedTable[]>([]);

  /**
   * Opens the dataset import modal.
   */
  function launchCSVImport() {
    datasetModal.onOpen();
  }

  /**
   * Opens the vocabulary/ontology import modal.
   */
  function launchVocabImport() {
    vocabModal.onOpen();
  }

  /**
   * Runs the schema inference and builds RDF-style graph from current dataset.
   */
  async function runGraphWorkflow() {
    const schemaService = serviceRegistry.get<SchemaInferenceService>('schema-inference');
    const graphService = serviceRegistry.get<GraphBuilderService>('graph-builder');

    if (!schemaService || !graphService) {
      console.error("Required services are not registered.");
      return;
    }

    try {
      const schema = await schemaService.infer(parsedTables);
      const quads = await graphService.build(parsedTables, schema);
      console.log("Graph build complete:", quads);
      // Optionally update state or trigger render
    } catch (error) {
      console.error("Error during graph workflow:", error);
    }
  }

  /**
   * Opens the KnowledgeGraphViewer panel (to render graph)
   */
  function openGraphViewer() {
    const Panel = panelRegistry['KnowledgeGraphViewer'];
    if (!Panel) {
      console.warn("KnowledgeGraphViewer panel is not registered.");
      return;
    }
    console.log("Trigger KG viewer panel injection (to be implemented).");
  }

  return {
    datasetModal,
    vocabModal,
    parsedTables,
    setParsedTables,
    launchCSVImport,
    launchVocabImport,
    runGraphWorkflow,
    openGraphViewer
  };
}
