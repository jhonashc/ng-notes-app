import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
