import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Note, NoteStatus } from '../../interfaces/notes.interface';

import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'notes-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
})
export class FormPageComponent implements OnInit {
  public notesForm = new FormGroup({
    id: new FormControl<string>(''),
    title: new FormControl<string>('', Validators.required),
    description: new FormControl<string>('', Validators.required),
    status: new FormControl<NoteStatus>('IN PROGRESS'),
  });

  public statuses: NoteStatus[] = ['IN PROGRESS', 'COMPLETED'];

  constructor(
    private activedRoute: ActivatedRoute,
    private router: Router,
    private notesService: NotesService
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activedRoute.params.subscribe(({ id }) => {
      const note: Note | undefined = this.notesService.getNoteById(id);

      if (!note) {
        return this.router.navigateByUrl('/');
      }

      return this.notesForm.reset(note);
    });
  }

  get currentNote(): Note {
    const note = this.notesForm.value as Note;
    return note;
  }

  onSubmit(): void {
    if (this.notesForm.invalid) return;

    if (this.currentNote.id) {
      this.notesService.updateNote(this.currentNote);
    } else {
      this.notesService.addNote({
        ...this.currentNote,
        id: crypto.randomUUID(),
      });
    }

    this.router.navigateByUrl('/');
  }
}
