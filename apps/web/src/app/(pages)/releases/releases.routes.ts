import { Routes } from '@angular/router';
import { releaseResolver } from '@app/store/release/release.resolver';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        title: 'Releases',
        loadComponent: () => import('./releases.page').then((m) => m.ReleasesPage),
      },
      {
        path: ':releaseId',
        resolve: { release: releaseResolver },
        loadComponent: () => import('./[releaseId]/release.page').then((m) => m.ReleasePage),
      },
    ],
  },
];
