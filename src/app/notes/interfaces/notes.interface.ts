export interface NotesState {
  notes: Note[];
  noteCounter: number;
}

export interface Note {
  id: string;
  title: string;
  description?: string;
  status: NoteStatus;
}

export type NoteStatus = 'IN PROGRESS' | 'COMPLETED';
