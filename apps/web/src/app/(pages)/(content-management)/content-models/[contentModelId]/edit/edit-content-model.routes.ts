import { Routes } from '@angular/router';
import { EditContentModelService } from './edit-content-model.service';

export const routes: Routes = [
  {
    path: '',
    title: 'Edit Content Model',
    providers: [EditContentModelService],
    children: [
      {
        path: '',
        pathMatch: 'full',
        title: 'Edit Content Model',
        loadComponent: () =>
          import('./edit-content-model.page').then((m) => m.EditContentModelPage),
      },
      {
        path: 'property',
        title: 'Edit Property',
        loadComponent: () =>
          import('./property/edit-content-model-property.page').then(
            (m) => m.EditContentModelPropertyPage,
          ),
      },
    ],
  },
];
