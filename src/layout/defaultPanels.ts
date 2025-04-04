/**
 * defaultPanels.ts
 *
 * Optional utility to auto-load panels on app start.
 * Can register KnowledgeGraphViewer, VocabularyFilterTree, etc.
 */

export const defaultPanels = [
  {
    id: 'left-vocab',
    componentId: 'VocabularyFilterTree',
    region: 'left'
  },
  {
    id: 'left-browser',
    componentId: 'DatasetBrowser',
    region: 'left'
  },
  {
    id: 'center-kg',
    componentId: 'KnowledgeGraphViewer',
    region: 'center'
  }
];
