/**
 * panelRegistry.ts
 *
 * This is the global panel registry for the OIC2 layout system.
 * It maps unique string IDs to panel-renderable React components.
 * These are used in draggable layout zones like 'center', 'left', etc.
 */

import { KnowledgeGraphViewer } from '../components/modules/KnowledgeGraphViewer';
import { VocabularyFilterTree } from '../components/modules/VocabularyFilterTree';
import { DatasetBrowser } from '../components/modules/DatasetBrowser';
import { PanelManagerToolbar } from '../components/modules/PanelManagerToolbar';

export const panelRegistry: Record<string, React.FC<any>> = {
  KnowledgeGraphViewer,
  VocabularyFilterTree,
  DatasetBrowser,
  PanelManagerToolbar
};
