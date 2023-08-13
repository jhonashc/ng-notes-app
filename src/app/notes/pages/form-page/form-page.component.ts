import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Note, NoteStatus } from '../../interfaces/notes.interface';

import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'notes-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
})
export class FormPageComponent {
  public notesForm = new FormGroup({
    id: new FormControl<string>(''),
    title: new FormControl<string>('', Validators.required),
    description: new FormControl<string>('', Validators.required),
    status: new FormControl<NoteStatus>('IN PROGRESS'),
  });

  public statuses: NoteStatus[] = ['IN PROGRESS', 'COMPLETED'];

  constructor(private router: Router, private notesService: NotesService) {}

  get currentNote(): Note {
    const note = this.notesForm.value as Note;
    return note;
  }

  onSubmit(): void {
    if (this.notesForm.invalid) return;

    this.notesService.addNote(this.currentNote);

    this.router.navigateByUrl('/notes');
  }
}
