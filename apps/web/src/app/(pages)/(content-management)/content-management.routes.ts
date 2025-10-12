import { Routes } from '@angular/router';
import { contentItemsResolver } from '@app/store/content-item/content-item.resolver';
import { contentModelsResolver } from '@app/store/content-model/content-model.resolver';
import { releasesResolver } from '@app/store/release/release.resolver';

export const routes: Routes = [
  {
    path: 'content-items',
    resolve: { contentItems: contentItemsResolver },
    loadChildren: () =>
      import('@pages/(content-management)/content-items/content-items.routes').then(
        (m) => m.routes,
      ),
  },
  {
    path: 'content-models',
    resolve: { contentItems: contentModelsResolver },
    loadChildren: () =>
      import('@pages/(content-management)/content-models/content-models.routes').then(
        (m) => m.routes,
      ),
  },
  {
    path: 'releases',
    resolve: { contentItems: releasesResolver },
    loadChildren: () =>
      import('@pages/(content-management)/releases/releases.routes').then((m) => m.routes),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'content-items',
  },
];
