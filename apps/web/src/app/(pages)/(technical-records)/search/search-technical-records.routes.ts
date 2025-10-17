import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        title: 'Search technical records',
        loadComponent: () =>
          import('./search-technical-records.page').then((m) => m.SearchTechnicalRecordsPage),
      },
    ],
  },
];
