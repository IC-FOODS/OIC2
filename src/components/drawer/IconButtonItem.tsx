/**
 * IconButtonItem.tsx
 *
 * A reusable icon button with padding, tooltip, and click handler.
 * Used within the WorkflowLauncherDrawer to activate workflows.
 */

import React from 'react';
import { IconButton, Tooltip } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface IconButtonItemProps {
  icon: IconType;
  label: string;
  onClick: () => void;
}

export const IconButtonItem: React.FC<IconButtonItemProps> = ({ icon: Icon, label, onClick }) => {
  return (
    <Tooltip label={label} placement="right" hasArrow>
      <IconButton
        icon={<Icon />}
        aria-label={label}
        onClick={onClick}
        variant="ghost"
        size="sm"
        isRound
        className="my-2 mx-auto"
      />
    </Tooltip>
  );
};
