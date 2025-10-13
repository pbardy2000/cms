import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./create-technical-record.page').then((m) => m.CreateTechnicalRecordPage),
      },
    ],
  },
];
