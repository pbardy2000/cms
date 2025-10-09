import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        title: 'Content Models',
        loadChildren: () => import('./content-models.page').then((m) => m.ContentModelsPage),
      },
    ],
  },
];
