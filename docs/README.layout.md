# OIC2 Layout System

## Structure

- Top-level shell: `AppShell.tsx`
- Header/Footer: Fixed height
- Middle: `react-resizable-panels` horizontal group
- Center column: Nested vertical panel group

## Persistence

- Panel state saved via `autoSaveId`
- Layout rebuilds automatically on refresh
- Fully responsive with Tailwind styling
