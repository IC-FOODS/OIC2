/**
 * SettingsDrawer.tsx
 *
 * A Chakra UI drawer that slides out from the right.
 * Triggered by the user icon in the header.
 */

import React, { useState } from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  Button
} from '@chakra-ui/react';

export const SettingsDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="ghost" onClick={() => setIsOpen(true)} size="sm">
        👤
      </Button>
      <Drawer placement="right" onClose={() => setIsOpen(false)} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>User Settings</DrawerHeader>
          <DrawerBody>
            <p>[Settings tree will load here]</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
