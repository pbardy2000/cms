import { Routes } from '@angular/router';
import { contentModelResolver } from '@app/store/content-model/content-model.resolver';

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
      {
        path: ':contentModelId',
        resolve: { contentModel: contentModelResolver },
        loadChildren: () => import('./[contentModelId]/content-model.routes').then((m) => m.routes),
      },
    ],
  },
];
