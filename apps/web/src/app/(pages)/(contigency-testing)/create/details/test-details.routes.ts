import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./test-details.page').then(m => m.TestDetailsPage)
      }
    ]
  }
];