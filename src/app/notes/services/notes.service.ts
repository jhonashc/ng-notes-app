import { Injectable } from '@angular/core';

import { Note, NotesState } from '../interfaces/notes.interface';

import { StoreService } from './store.service';

const initialState: NotesState = {
  notes: [],
  noteCounter: 0,
};

@Injectable({
  providedIn: 'root',
})
export class NotesService extends StoreService<NotesState> {
  constructor() {
    super(initialState);
  }

  addNote(newNote: Note): void {
    this.setState((state) => ({
      notes: [...state.notes, newNote],
    }));
  }

  updateNote(newNote: Note): void {
    this.setState((state) => ({
      notes: state.notes.map((note) =>
        note.id === newNote.id
          ? {
              ...note,
              title: newNote.title,
              description: newNote.description,
              status: newNote.status,
            }
          : note
      ),
    }));
  }

  deleteNote(noteId: string): void {
    this.setState((state) => ({
      notes: state.notes.filter((note) => note.id !== noteId),
    }));
  }
}
