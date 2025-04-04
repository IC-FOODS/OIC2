/**
 * AppShell.tsx (Merged)
 *
 * Combines original OIC2 layout (resizable panels, Header/Footer) with the WorkflowLauncherDrawer.
 * Maintains panel persistence, adjustable regions, and registers the drawer in far-left space.
 */

import React from 'react';
import { PanelGroup, Panel } from 'react-resizable-panels';
import { Box } from '@chakra-ui/react';
import { PanelColumn } from '../components/layout/PanelColumn';
import { Header } from './Header';
import { Footer } from './Footer';
import { WorkflowLauncherDrawer } from '../components/drawer/WorkflowLauncherDrawer';

export const AppShell: React.FC = () => {
  return (
    <Box className="flex flex-col h-screen">
      {/* Header area */}
      <Header />

      {/* Main layout region with drawer and panels */}
      <Box className="flex flex-grow overflow-hidden relative">
        {/* Injected Drawer */}
        <WorkflowLauncherDrawer />

        {/* Spacer to offset main layout by drawer width */}
        <Box className="w-10 shrink-0" />

        {/* Resizable 3-column layout */}
        <PanelGroup autoSaveId="main-layout" direction="horizontal">
          {/* Left Panel */}
          <Panel defaultSize={15}>
            <PanelColumn region="left" />
          </Panel>

          {/* Center Panel */}
          <Panel defaultSize={70}>
            <PanelGroup autoSaveId="center-stack" direction="vertical">
              <Panel defaultSize={15}>
                <PanelColumn region="center-top" />
              </Panel>
              <Panel defaultSize={60}>
                <PanelColumn region="center" />
              </Panel>
              <Panel defaultSize={25}>
                <PanelColumn region="center-bottom" />
              </Panel>
            </PanelGroup>
          </Panel>

          {/* Right Panel */}
          <Panel defaultSize={15}>
            <PanelColumn region="right" />
          </Panel>
        </PanelGroup>
      </Box>

      {/* Footer area */}
      <Footer />
    </Box>
  );
};
