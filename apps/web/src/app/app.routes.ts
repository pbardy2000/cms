import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'content-management',
    loadChildren: () =>
      import('@pages/(content-management)/content-management.routes').then((m) => m.routes),
  },
  {
    path: 'contingency-testing',
    loadChildren: () =>
      import('@pages/(contingency-testing)/contingency-testing.routes').then((m) => m.routes),
  },
  {
    path: 'technical-records',
    loadChildren: () =>
      import('@pages/(technical-records)/technical-records.routes').then((m) => m.routes),
  },
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('@pages/(home)/home.page').then((m) => m.HomePage),
  },
];
