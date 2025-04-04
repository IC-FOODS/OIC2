import React from 'react';

const AppShell: React.FC = () => {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-4xl font-extrabold text-blue-600">✅ Tailwind CSS is Working</h1>

      <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Test Button
      </button>

      <div className="border border-dashed border-gray-400 p-4">
        <p className="text-sm text-gray-500">This box should have a dashed border.</p>
      </div>

      <input
        className="px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-400"
        placeholder="Type something…"
      />
    </div>
  );
};

export default AppShell;
