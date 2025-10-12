import { Routes } from '@angular/router';
import { EditContentModelService } from './edit-content-model.service';

export const routes: Routes = [
  {
    path: '',
    providers: [EditContentModelService],
    children: [
      {
        path: '',
        title: 'Edit Content Model',
        loadComponent: () =>
          import('./edit-content-model.page').then((m) => m.EditContentModelPage),
      },
    ],
  },
];
