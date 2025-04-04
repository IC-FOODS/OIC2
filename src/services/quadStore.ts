/**
 * Simple in-memory QuadStore for graph representation using subject-predicate-object-graph pattern.
 */

export type Quad = {
  subject: string;
  predicate: string;
  object: string;
  graph?: string;
};

export class QuadStore {
  private quads: Quad[] = [];

  add(quad: Quad): void {
    this.quads.push(quad);
  }

  match(subject?: string, predicate?: string, object?: string, graph?: string): Quad[] {
    return this.quads.filter(q =>
      (!subject || q.subject === subject) &&
      (!predicate || q.predicate === predicate) &&
      (!object || q.object === object) &&
      (!graph || q.graph === graph)
    );
  }

  getAll(): Quad[] {
    return [...this.quads];
  }

  clear(): void {
    this.quads = [];
  }
}
