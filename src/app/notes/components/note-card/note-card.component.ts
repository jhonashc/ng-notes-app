import { Component, Input, OnInit } from '@angular/core';

import { Note } from '../../interfaces/notes.interface';

import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'notes-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent implements OnInit {
  @Input() note!: Note;

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    if (!this.note) throw new Error('The note property is required');
  }

  onDeleteNote(noteId: string): void {
    this.notesService.deleteNote(noteId);
  }
}
