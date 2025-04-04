# OIC2 Developer Guide

## Overview

OIC2 is a fully client-side, offline-first React application scaffold for knowledge graph visualization and data import workflows. It uses a modular, draggable layout system and supports CSV and ontology ingestion workflows.

---

## 🧱 Layout Architecture

- Header (12%) — Logo, user settings
- Footer (6%) — Status/info
- Center (82%) — 3-column layout:
  - Left and Right: 15% width (resizable)
  - Center: 3 stacked panels (top, center, bottom), resizable
- Layout state is stored in `localStorage` using `react-resizable-panels`

---

## 🧩 Panels & Modules

Panels are registered components, managed via `panelRegistry.ts`. They can be rendered into any of the center, left, or right layout zones.

---

## 🔄 Drag-and-Drop

`DraggablePanel.tsx` is the wrapper for movable components (future integration with `@dnd-kit` is planned). Panels can be rearranged into any non-header/footer zone.

---

## 📦 Modal Workflows

Modals include:
- `DataImportModal` for CSVs
- `OntologyImportModal` for OWL/SKOS vocabularies

Their outputs generate files and vocab structures registered to the app.

---

## ⚙️ Settings

Settings are displayed as a vocabulary-based tree (`SettingsTreePanel.tsx`) inside a Chakra UI drawer.

---

## 🔗 URL State

URL strings store:
- Panel layout
- Filtered vocabularies
- Missing dataset references

Managed via `urlStateManager.ts`.

---

## 🌳 Vocabulary Filtering

- Vocabulary hierarchies (e.g. NCBI taxonomy) are used to filter graph views.
- Vocab registry supports OWL/SKOS-based structures.

---

## 🧩 New Microservice Architecture

Each core data or workflow function is implemented as a microservice:

| Service | Description |
|---------|-------------|
| CSVParserService | Parses CSV into structured tables |
| SchemaInferenceService | Detects PK/FK and builds schema |
| GraphBuilderService | Converts schema+tables to RDF quads |
| VocabularyService | Loads and filters hierarchical vocab trees |

All services implement `BaseService` and are registered in `ServiceRegistry`.

