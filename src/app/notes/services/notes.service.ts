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
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('cacheStore', JSON.stringify(this.state));
  }

  private loadFromLocalStorage(): void {
    const cacheStorage: string | null = localStorage.getItem('cacheStore');

    if (!cacheStorage) return;

    this.setState((state) => JSON.parse(cacheStorage));
  }

  addNote(newNote: Note): void {
    this.setState((state) => ({
      notes: [...state.notes, newNote],
      noteCounter: state.noteCounter + 1,
    }));

    this.saveToLocalStorage();
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

    this.saveToLocalStorage();
  }

  deleteNote(noteId: string): void {
    this.setState((state) => ({
      notes: state.notes.filter((note) => note.id !== noteId),
      noteCounter: state.noteCounter - 1,
    }));

    this.saveToLocalStorage();
  }

  getNoteById(noteId: string): Note | undefined {
    return this.state.notes.find((note) => note.id === noteId);
  }
}
