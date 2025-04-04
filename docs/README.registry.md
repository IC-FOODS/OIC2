# Registry Pattern in OIC2

## Panel Registry

Located in `src/registry/panelRegistry.ts`.

Used to register layout-rendered modules like:
- KnowledgeGraphViewer
- DatasetBrowser
- VocabularyFilterTree

These are rendered into panels via user layout actions.

---

## Workflow Registry

Located in `src/components/registry/componentRegistry.ts`.

Used by the WorkflowEngine to display modal steps.

---

## Why Separate?

- Panel registry handles **layout**
- Workflow registry handles **step-wise import or enrichment logic**

This ensures clean separation of concerns and modularity.
