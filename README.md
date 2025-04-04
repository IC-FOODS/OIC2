# OIC2

Offline-first, fully client-side knowledge graph application scaffold for data import, semantic mapping, and graph visualization.

Built with:
- React
- Tailwind CSS
- Chakra UI
- Cytoscape.js (default KG renderer)
- react-resizable-panels
- IndexedDB + Web Workers
- Microservice architecture for modularity

---

## ✨ Key Features

- Modular, draggable layout with state persistence
- Dynamic panel system with registry-based plug-ins
- CSV/relational import → RDF-style graph generation
- Vocabulary filtering (e.g. NCBI Taxonomy)
- Shareable layouts via URL state
- OWL/SKOS vocabulary import
- Fully client-side: no server or database required

---

## 🧭 Project Layout

```
src/
├── layout/              # AppShell + Header/Footer + Panel layout
├── components/          # UI modules and modals
├── panels/              # Panel containers
├── services/            # Modular microservice APIs (parser, schema, vocab, etc.)
├── utils/               # General utilities (CSV parsing, state, etc.)
├── graph/               # RDF quad generation
├── schema/              # Schema inference logic
├── registry/            # Panel registry
├── docs/                # Developer documentation
```

---

## 🧑‍💻 Developer Docs

All technical documentation lives in the [`docs/`](./docs) folder:

- [`DEV_GUIDE.md`](./docs/DEV_GUIDE.md) – full system architecture
- [`README.layout.md`](./docs/README.layout.md) – panel layout and resizing system
- [`README.registry.md`](./docs/README.registry.md) – service and panel registry system

---

## 🛠 Getting Started

1. Clone repo
2. `npm install`
3. `npm run dev` – launches Vite-powered local server

Use the layout panel controls to open graph viewers, vocab trees, or import panels.

---

## 📡 Shareable URLs

Layout and filter state is encoded in the URL. On load:
- If datasets or vocabularies are missing, the app will prompt user to upload or link
- Authenticated services (e.g. GitHub, Google Drive) can be connected by the user (future)

---
