import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        title: 'Amend technical record',
        loadComponent: () =>
          import('./amend-technical-record.page').then((m) => m.AmendTechnicalRecordPage),
      },
    ],
  },
];
