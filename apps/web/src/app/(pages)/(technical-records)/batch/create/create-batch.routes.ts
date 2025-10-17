import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        title: 'Create a new batch of records',
        loadComponent: () => import('./create-batch.page').then((m) => m.CreateBatchPage),
      },
    ],
  },
];
