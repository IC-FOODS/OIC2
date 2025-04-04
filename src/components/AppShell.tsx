/**
 * Root layout of the application. Hosts the main graph area and interface shell.
 */
import React from 'react';

const AppShell: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-600">OIC2 Scaffold</h1>
      <p className="mt-2 text-gray-600">This is the starting point of your offline-first semantic graph app.</p>
      <div className="mt-4 border rounded-lg h-96 bg-gray-100 flex items-center justify-center">
        <span className="text-gray-500">[ Cytoscape.js render area placeholder ]</span>
      </div>
    </div>
  );
};

export default AppShell;
