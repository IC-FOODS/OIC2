/**
 * Type definitions for vocabulary term matching and source registration.
 */

export interface VocabularySource {
  id: string;
  label: string;
  endpoint: string; // API or local file
  format: 'OLS' | 'schema.org' | 'SKOS' | 'OWL' | 'custom';
  description?: string;
}

export interface TermMatch {
  input: string;
  matchedLabel: string;
  iri: string;
  score: number;
  source: string;
}
