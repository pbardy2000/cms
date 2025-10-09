import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        title: 'Releases',
        loadComponent: () => import('./releases.page').then((m) => m.ReleasesPage),
      },
    ],
  },
];
