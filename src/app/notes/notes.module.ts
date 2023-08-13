import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';

import { FormPageComponent } from './pages/form-page/form-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';

@NgModule({
  declarations: [
    DetailPageComponent,
    FormPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    SearchPageComponent,
  ],
  imports: [CommonModule, NotesRoutingModule],
})
export class NotesModule {}
