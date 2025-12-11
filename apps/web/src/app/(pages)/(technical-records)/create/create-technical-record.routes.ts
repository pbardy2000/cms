import { Routes } from '@angular/router';
import { canDeactivateGuard } from '@app/guards/can-deactivate.guard';

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
        canDeactivate: [canDeactivateGuard],
        loadComponent: () =>
          import('./details/create-technical-record-details.page').then(
            (m) => m.CreateTechnicalRecordPage,
          ),
      },
      {
        path: 'preview',
        pathMatch: 'full',
        title: 'Technical record preview',
        loadComponent: () =>
          import('./preview/create-preview-technical-record.page').then(
            (m) => m.CreatePreviewTechnicalRecordPage,
          ),
      },
    ],
  },
];
