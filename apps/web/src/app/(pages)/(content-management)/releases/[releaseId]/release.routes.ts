import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        title: 'Release',
        loadComponent: () => import('./release.page').then((m) => m.ReleasePage),
      },
      {
        path: 'edit',
        pathMatch: 'full',
        title: 'Edit Release',
        loadComponent: () => import('./edit/edit-release.page').then((m) => m.EditReleasePage),
      },
    ],
  },
];
