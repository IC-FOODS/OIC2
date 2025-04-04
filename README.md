# OIC2 Scaffold – Offline-First Semantic Graph Web App

This project scaffold sets up the foundation for building an offline-first, React-based semantic graph visualization tool that ingests CSV/relational data, performs vocabulary mapping, and renders enriched knowledge graphs.

## 🔧 Stack

- **React + Vite + Tailwind CSS**
- **TypeScript** for all source files
- **IndexedDB** via Dexie.js
- **Cytoscape.js** (pluggable renderer pattern)
- **QuadStore** for storing RDF-like graph triples
- **EventBus** for decoupled communication
- **Workflow Engine** for human-guided step sequences
- **Vocabulary Repository** + **Registry** for semantic enrichment

---

## 🗂️ Folder Structure

```
src/
├── components/         # UI components (workflow steps, filters)
├── contexts/           # Composition root & React contexts
├── eventbus/           # Pub-sub utility
├── services/           # App logic (DB, vocab, graph builder)
├── styles/             # Tailwind entrypoint
├── utils/              # Schema inference, helpers
├── workflows/          # Workflow engine & definitions
├── types/              # Centralized TypeScript types
```

---

## 🧠 Core Concepts

### 🧭 Composition Root

Initializes core services (e.g., QuadStore, DB) and provides them via React Context.

### 🧱 QuadStore

Simple in-memory store to accumulate subject–predicate–object–graph relationships.

### ⚙️ Workflow Engine

Manages sequences of guided steps (CSV import, schema preview, mapping, term matching).

### 🔍 Vocabulary Repository

Resolves term matches from public vocabularies (e.g., OLS) and user-supplied OWL/SKOS files.

### ✅ Vocabulary Registry

Manages vocabularies used for filtering and enrichment.

---

## 🚀 Setup & Run

```bash
npm install
npm run dev
```

---

## ✨ Extending

To add a new step to the workflow:
1. Create a new component in `components/workflowSteps/`
2. Register it in `componentRegistry.ts`
3. Add it to a workflow definition

To integrate vocab filtering:
- Register your vocab in the registry
- Add your UI in `components/filters/`

---

Built with ❤️ for the IC-FOODS ecosystem.
