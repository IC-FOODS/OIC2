/**
 * SettingsDrawer.tsx
 *
 * A Chakra UI drawer that slides out from the right.
 * Triggered by the user icon in the header.
 */

import React, { useState } from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

export const SettingsDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="ghost" onClick={() => setIsOpen(true)} size="sm">
        👤
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Settings</DrawerHeader>
          <DrawerBody>
            {/* settings UI here */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
