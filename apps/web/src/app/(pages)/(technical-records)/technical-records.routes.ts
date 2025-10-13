import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'create',
        title: 'Create technical record',
        loadChildren: () => import('./create/create-technical-record.routes').then((m) => m.routes),
      },
    ],
  },
];
