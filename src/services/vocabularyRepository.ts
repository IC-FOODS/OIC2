/**
 * Vocabulary Repository Service:
 * - Manages vocabulary sources and performs term resolution.
 * - Supports OLS (Ontology Lookup Service) API as default.
 */
import { VocabularySource, TermMatch } from '../types/vocabulary';

export class VocabularyRepository {
  private sources: VocabularySource[] = [];

  /**
   * Register a new vocabulary source (e.g., OLS endpoint).
   */
  registerSource(source: VocabularySource) {
    this.sources.push(source);
  }

  /**
   * Return all registered sources.
   */
  listSources(): VocabularySource[] {
    return this.sources;
  }

  /**
   * Search a term across all registered sources.
   */
  async searchTerm(term: string): Promise<TermMatch[]> {
    const results: TermMatch[] = [];

    for (const source of this.sources) {
      if (source.format === 'OLS') {
        try {
          const response = await fetch(\`\${source.endpoint}/search?q=\${encodeURIComponent(term)}&rows=10\`);
          const json = await response.json();
          const matches = json.response.docs.map((doc: any) => ({
            input: term,
            matchedLabel: doc.label,
            iri: doc.iri,
            score: doc.score,
            source: source.id
          }));
          results.push(...matches);
        } catch (err) {
          console.warn(\`Failed to fetch from \${source.label}\`, err);
        }
      }
      // TODO: Add SKOS, OWL, local vocab loaders
    }

    return results;
  }
}

export const vocabRepo = new VocabularyRepository();
