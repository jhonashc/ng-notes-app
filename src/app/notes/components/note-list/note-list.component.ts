import { Component, Input } from '@angular/core';

import { Note } from '../../interfaces/notes.interface';

@Component({
  selector: 'notes-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent {
  @Input() notes: Note[] = [];
}
