import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'new',
        component: FormPageComponent,
      },
      {
        path: 'search',
        component: SearchPageComponent,
      },
      {
        path: 'edit/:id',
        component: FormPageComponent,
      },
      {
        path: 'list',
        component: ListPageComponent,
      },
      {
        path: ':id',
        component: DetailPageComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}
