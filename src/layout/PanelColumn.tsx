/**
 * PanelColumn.tsx (Updated)
 *
 * Dynamically renders components assigned to a specific layout region
 * using the panelRegistry and defaultPanels.
 * Includes safety checks and fallback rendering.
 */

import React from 'react';
import { defaultPanels } from '../../config/defaultPanels';
import { panelRegistry } from '../../registry/panelRegistry';

interface Props {
  region: string; // e.g. "left", "center", "right"
}

export const PanelColumn: React.FC<Props> = ({ region }) => {
  // Get all panels registered for this region
  const panels = defaultPanels.filter(panel => panel.region === region);

  return (
    <div className="h-full w-full p-2 overflow-auto space-y-3">
      {panels.length > 0 ? (
        panels.map((panel, idx) => {
          const Component = panelRegistry[panel.componentId];

          if (!Component) {
            console.warn(`No component registered for panel: ${panel.componentId}`);
            return (
              <div key={panel.id || idx} className="p-2 border border-red-400 text-red-700 text-sm bg-red-50 rounded">
                ⚠️ Component "{panel.componentId}" not found
              </div>
            );
          }

          return (
            <div key={panel.id || idx} className="border border-gray-200 rounded shadow-sm p-1 bg-white">
              <Component />
            </div>
          );
        })
      ) : (
        <div className="text-sm text-gray-500 italic">No panels registered for region: {region}</div>
      )}
    </div>
  );
};
