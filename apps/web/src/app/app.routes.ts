import { Routes } from '@angular/router';
import { contentItemsResolver } from './store/content-item/content-item.resolver';
import { contentModelsResolver } from './store/content-model/content-model.resolver';
import { releasesResolver } from './store/release/release.resolver';

export const routes: Routes = [
  {
    path: 'content-items',
    resolve: { contentItems: contentItemsResolver },
    loadChildren: () => import('@pages/content-items/content-items.routes').then((m) => m.routes),
  },
  {
    path: 'content-models',
    resolve: { contentItems: contentModelsResolver },
    loadChildren: () => import('@pages/content-models/content-models.routes').then((m) => m.routes),
  },
  {
    path: 'releases',
    resolve: { contentItems: releasesResolver },
    loadChildren: () => import('@pages/releases/releases.routes').then((m) => m.routes),
  },
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('@pages/(home)/home.page').then((m) => m.HomePage),
  },
];
