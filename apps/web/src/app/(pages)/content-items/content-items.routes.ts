import { Routes } from '@angular/router';
import { contentItemResolver } from '@app/store/content-item/content-item.resolver';

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
        resolve: { contentItem: contentItemResolver },
        loadChildren: () => import('./[contentItemId]/content-item.routes').then((m) => m.routes),
      },
    ],
  },
];
