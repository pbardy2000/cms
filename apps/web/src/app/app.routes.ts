import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'content-management',
    loadChildren: () =>
      import('@pages/(content-management)/content-management.routes').then((m) => m.routes),
  },

  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('@pages/(home)/home.page').then((m) => m.HomePage),
  },
];
