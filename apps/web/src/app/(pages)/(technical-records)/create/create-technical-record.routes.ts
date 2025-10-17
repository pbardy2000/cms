import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        title: 'Create a new technical record',
        loadComponent: () =>
          import('./create-technical-record.page').then((m) => m.CreateTechnicalRecordPage),
      },
      {
        path: 'details',
        pathMatch: 'full',
        title: 'Technical record details',
        loadComponent: () =>
          import('./details/create-technical-record-details.page').then(
            (m) => m.CreateTechnicalRecordPage,
          ),
      }
    ],
  },
];
