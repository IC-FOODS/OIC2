/**
 * VocabularyService.ts
 *
 * A stub for managing loaded vocabularies (OWL/SKOS/NCBI Taxonomy).
 */

import { BaseService } from './BaseService';

export interface Term {
  id: string;
  label: string;
  parent?: string;
  children?: string[];
}

export class VocabularyService implements BaseService {
  id = "vocabulary";
  name = "Vocabulary Service";

  private vocab = new Map<string, Term>();

  async loadTerms(terms: Term[]): Promise<void> {
    this.vocab.clear();
    for (const t of terms) {
      this.vocab.set(t.id, t);
    }
  }

  getTerm(id: string): Term | undefined {
    return this.vocab.get(id);
  }

  search(label: string): Term[] {
    return Array.from(this.vocab.values()).filter(t =>
      t.label.toLowerCase().includes(label.toLowerCase())
    );
  }
}
