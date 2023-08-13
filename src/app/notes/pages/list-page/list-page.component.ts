import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Note } from '../../interfaces/notes.interface';

import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'notes-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent implements OnInit {
  public notes$?: Observable<Note[]>;
  public noteCounter$?: Observable<number>;

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.notes$ = this.notesService.select((state) => state.notes);
    this.noteCounter$ = this.notesService.select((state) => state.noteCounter);
  }
}
