import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NotesRoutingModule } from './notes-routing.module';
import { SharedModule } from '../shared/shared.module';

import { FormPageComponent } from './pages/form-page/form-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

import { NoteCardComponent } from './components/note-card/note-card.component';
import { NoteListComponent } from './components/note-list/note-list.component';

@NgModule({
  declarations: [
    FormPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    SearchPageComponent,
    NoteCardComponent,
    NoteListComponent,
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class NotesModule {}
