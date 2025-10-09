import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        title: 'Content Model',
        loadComponent: () => import('./content-model.page').then((m) => m.ContentModelPage),
      },
      {
        path: 'edit',
        pathMatch: 'full',
        title: 'Edit Content Model',
        loadComponent: () =>
          import('./edit/edit-content-model.page').then((m) => m.EditContentModelPage),
      },
    ],
  },
];
