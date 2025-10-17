import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'create',
    loadChildren: () => import('./create/create-batch.routes').then((m) => m.routes),
  },
];
