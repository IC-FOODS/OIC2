/**
 * DraggablePanel.tsx
 *
 * A wrapper that provides a title bar and a container for registered modules.
 * Future versions will include @dnd-kit integration for drag-and-drop.
 */

import React from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const DraggablePanel: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="border rounded shadow-sm bg-white mb-2">
      <div className="bg-gray-100 px-3 py-2 text-sm font-semibold cursor-move">
        {title}
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
};
