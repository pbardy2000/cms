import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        title: 'Content Item',
        loadComponent: () => import('./content-item.page').then((m) => m.ContentItemPage),
      },
      {
        path: 'edit',
        title: 'Edit Content Item',
        loadComponent: () =>
          import('./edit/edit-content-item.page').then((m) => m.EditContentItemPage),
      },
    ],
  },
];
