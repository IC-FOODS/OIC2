/**
 * PanelColumn.tsx
 *
 * A wrapper for rendering components into a layout panel.
 * The 'id' prop identifies which region is being rendered (left, right, center, etc).
 */

import React from 'react';

interface Props {
  id: string;
}

export const PanelColumn: React.FC<Props> = ({ id }) => {
  return (
    <div className="h-full w-full p-2 overflow-auto">
      <div className="border border-dashed border-gray-400 rounded p-2 h-full bg-white text-gray-700">
        <p className="text-xs mb-1 font-semibold uppercase tracking-wider text-gray-500">
          Panel: {id}
        </p>
        <div className="text-sm">[Drop content here]</div>
      </div>
    </div>
  );
};
