/**
 * WorkflowLauncherDrawer.tsx (Merged)
 *
 * Merged version of the drawer component:
 * - Maintains visual layout and styling
 * - Wires icons to useWorkflowLauncher handlers
 * - Fully documented
 */

import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import { FiSearch, FiFolder, FiBookOpen, FiRefreshCcw, FiShare2 } from 'react-icons/fi';
import { IconButtonItem } from './IconButtonItem';
import { useWorkflowLauncher } from '../../hooks/useWorkflowLauncher';

export const WorkflowLauncherDrawer: React.FC = () => {
  // Hook that provides all action handlers (modal triggers, graph builds, etc.)
  const {
    launchCSVImport,
    launchVocabImport,
    runGraphWorkflow,
    openGraphViewer
  } = useWorkflowLauncher();

  return (
    <Box className="fixed top-[12%] left-0 h-[82%] w-10 bg-white border-r shadow-sm z-40">
      <VStack spacing={2} align="center" className="pt-4">
        {/* Placeholder: Reserved for future search UI */}
        <IconButtonItem icon={FiSearch} label="Search (coming soon)" onClick={() => {}} />
        
        {/* Launch CSV import workflow modal */}
        <IconButtonItem icon={FiFolder} label="Import Dataset" onClick={launchCSVImport} />
        
        {/* Launch ontology import modal */}
        <IconButtonItem icon={FiBookOpen} label="Import Vocabulary" onClick={launchVocabImport} />
        
        {/* Run schema inference and graph build */}
        <IconButtonItem icon={FiRefreshCcw} label="Build Graph" onClick={runGraphWorkflow} />
        
        {/* Open the Knowledge Graph viewer panel */}
        <IconButtonItem icon={FiShare2} label="Show Graph" onClick={openGraphViewer} />
      </VStack>
    </Box>
  );
};
