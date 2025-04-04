/**
 * Header.tsx
 *
 * Displays the app's title/logo and a user profile button
 * that triggers a slide-out settings drawer.
 */

import React from 'react';
import { SettingsDrawer } from '../components/SettingsDrawer';

export const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-6 py-2 bg-white border-b shadow-sm h-full">
      <div className="text-xl font-bold text-blue-700 tracking-wide">🌐 OIC2</div>
      <SettingsDrawer />
    </div>
  );
};
