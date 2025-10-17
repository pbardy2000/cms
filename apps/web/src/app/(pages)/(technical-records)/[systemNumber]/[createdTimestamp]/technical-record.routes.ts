import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        title: 'View technical record',
        loadComponent: () =>
          import('./view-technical-record.page').then((m) => m.ViewTechnicalRecordPage),
      },
      {
        path: ':reasonForAmendment',
        title: 'Amend technical record',
        loadChildren: () =>
          import('./[reasonForAmendment]/amend-technical-record.routes').then((m) => m.routes),
      },
    ],
  },
];
