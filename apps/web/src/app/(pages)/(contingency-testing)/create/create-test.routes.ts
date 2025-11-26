import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./create-test.page').then(m => m.CreateTestPage) 
      },
      {
        path: 'details',
        loadChildren: () => import('./details/test-details.routes').then(m => m.routes)
      }
    ]
  }
];