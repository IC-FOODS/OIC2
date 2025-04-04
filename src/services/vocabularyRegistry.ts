/**
 * Vocabulary Registry Service:
 * Registers vocabularies used for filtering or semantic enrichment.
 */
interface RegisteredVocab {
  id: string;
  label: string;
  type: 'filter' | 'enrichment' | 'both';
  source: string;
  graph?: string;
}

class VocabularyRegistry {
  private registry: RegisteredVocab[] = [];

  register(vocab: RegisteredVocab) {
    if (!this.registry.find(v => v.id === vocab.id)) {
      this.registry.push(vocab);
    }
  }

  list(): RegisteredVocab[] {
    return this.registry;
  }

  getByType(type: 'filter' | 'enrichment' | 'both'): RegisteredVocab[] {
    return this.registry.filter(v => v.type === type || v.type === 'both');
  }
}

export const vocabRegistry = new VocabularyRegistry();
