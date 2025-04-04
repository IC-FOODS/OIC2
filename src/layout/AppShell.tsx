/**
 * AppShell.tsx
 *
 * This component defines the full application shell layout.
 * It includes a fixed-height header and footer, and a center content area
 * organized into three resizable columns. The center column is further
 * divided into a vertically resizable top, middle, and bottom section.
 *
 * Panel sizes are persisted using autoSaveId to support stateful layout on reload.
 */

import React from 'react';
import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels';
import { Header } from './Header';
import { Footer } from './Footer';
import { PanelColumn } from './PanelColumn';

export const AppShell: React.FC = () => {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-gray-50">
      {/* Fixed Header (12% height) */}
      <div className="h-[12%] shrink-0">
        <Header />
      </div>

      {/* Central Panel Group (3-column layout) */}
      <div className="flex-grow">
        <PanelGroup direction="horizontal" autoSaveId="oic2-horiz-panels">
          {/* Left Panel */}
          <Panel defaultSize={15} minSize={10}>
            <PanelColumn id="left" />
          </Panel>
          <PanelResizeHandle className="w-1 bg-gray-300 hover:bg-blue-400 cursor-col-resize" />

          {/* Center Column: Stacked vertical panels */}
          <Panel defaultSize={70} minSize={40}>
            <PanelGroup direction="vertical" autoSaveId="oic2-vert-panels">
              <Panel defaultSize={15} minSize={10}>
                <PanelColumn id="center-top" />
              </Panel>
              <PanelResizeHandle className="h-1 bg-gray-300 hover:bg-blue-400 cursor-row-resize" />
              <Panel>
                <PanelColumn id="center" />
              </Panel>
              <PanelResizeHandle className="h-1 bg-gray-300 hover:bg-blue-400 cursor-row-resize" />
              <Panel defaultSize={15} minSize={10}>
                <PanelColumn id="center-bottom" />
              </Panel>
            </PanelGroup>
          </Panel>

          {/* Right Panel */}
          <PanelResizeHandle className="w-1 bg-gray-300 hover:bg-blue-400 cursor-col-resize" />
          <Panel defaultSize={15} minSize={10}>
            <PanelColumn id="right" />
          </Panel>
        </PanelGroup>
      </div>

      {/* Fixed Footer (6% height) */}
      <div className="h-[6%] shrink-0">
        <Footer />
      </div>
    </div>
  );
};
