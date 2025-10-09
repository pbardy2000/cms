import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'content-items',
    loadChildren: () => import('@pages/content-items/content-items.routes').then((m) => m.routes),
  },
  {
    path: 'content-models',
    loadChildren: () => import('@pages/content-models/content-models.routes').then((m) => m.routes),
  },
  {
    path: 'releases',
    loadChildren: () => import('@pages/releases/releases.routes').then((m) => m.routes),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'content-items',
  },
];
