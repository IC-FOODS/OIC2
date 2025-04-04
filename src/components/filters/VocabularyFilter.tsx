/**
 * VocabularyFilter component:
 * UI for selecting vocabulary-based filters on graph nodes.
 */
import React from 'react';
import { vocabRegistry } from '../../services/vocabularyRegistry';

export const VocabularyFilter: React.FC = () => {
  const filters = vocabRegistry.getByType('filter');

  return (
    <div className="p-4 border rounded bg-white shadow-sm">
      <h3 className="text-lg font-semibold">Vocabulary Filters</h3>
      <ul className="mt-2 space-y-1">
        {filters.map(vocab => (
          <li key={vocab.id}>
            <label className="inline-flex items-center">
              <input type="checkbox" className="mr-2" />
              {vocab.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
