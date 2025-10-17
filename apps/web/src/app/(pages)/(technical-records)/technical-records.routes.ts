import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'create',
        title: 'Create a new technical record',
        loadChildren: () => import('./create/create-technical-record.routes').then((m) => m.routes),
      },
      {
        path: 'batch',
        title: 'Batch technical records',
        loadChildren: () => import('./batch/batch.routes').then((m) => m.routes),
      },
      {
        path: 'search',
        title: 'Search technical records',
        loadChildren: () =>
          import('./search/search-technical-records.routes').then((m) => m.routes),
      },
      {
        path: ':systemNumber/:createdTimestamp',
        title: 'Technical record details',
        loadChildren: () =>
          import('./[systemNumber]/[createdTimestamp]/technical-record.routes').then(
            (m) => m.routes,
          ),
      },
    ],
  },
];
