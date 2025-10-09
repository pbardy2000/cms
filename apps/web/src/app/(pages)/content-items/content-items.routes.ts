import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        title: 'Content Items',
        loadComponent: () => import('./content-items.page').then((m) => m.ContentItemsPage),
      },
      {
        path: ':contentItemId',
        loadChildren: () => import('./[contentItemId]/content-item.routes').then((m) => m.routes),
      },
    ],
  },
];
