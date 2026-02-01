export interface Note {
  id?: number;
  title: string;
  content: string;
  clientId?: number;
  createdAt?: string; // ISO date
  tags: string[]; // e.g., ['progress', 'anxiety']
}
