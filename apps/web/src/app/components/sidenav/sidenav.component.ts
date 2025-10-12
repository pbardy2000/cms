import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  imports: [RouterLink, RouterLinkActive],
})
export class SidenavComponent {
  items: (SidenavTheme | SidenavItem)[] = [
    {
      theme: 'Technical Records',
      children: [
        { label: 'Create a new record', routerLink: '/technical-records/create' },
        {
          label: 'Create a batch of records',
          routerLink: '/technical-records/create-batch',
        },
        { label: 'Search tech records', routerLink: '/technical-records/search' },
      ],
    },
    {
      theme: 'Contingency Testing',
      children: [
        { label: 'Create a new test', routerLink: '/contingency-testing/create' },
        { label: 'Find a test result', routerLink: '/contingency-testing/search' },
      ],
    },
    {
      theme: 'Content Management',
      children: [
        {
          label: 'Pages',
          routerLink: '/content-management/pages',
          children: [
            { label: 'New page', routerLink: '/content-management/pages/new/edit' },
            { label: 'View pages', routerLink: '/content-management/pages/view' },
          ],
        },
        {
          label: 'Content items',
          routerLink: '/content-management/content-items',
          children: [
            { label: 'New item', routerLink: '/content-management/content-items/new/edit' },
            { label: 'View items', routerLink: '/content-management/content-items/view' },
          ],
        },
        {
          label: 'Content models',
          routerLink: '/content-management/content-models',
          children: [
            { label: 'New model', routerLink: '/content-management/content-models/new/edit' },
            { label: 'View models', routerLink: '/content-management/content-models/view' },
          ],
        },
        {
          label: 'Releases',
          routerLink: '/content-management/releases',
          children: [
            { label: 'New release', routerLink: '/content-management/releases/new' },
            { label: 'View releases', routerLink: '/content-management/releases/view' },
          ],
        },
      ],
    },
  ];
}

export type SidenavTheme = {
  theme: string;
  children: SidenavItem[];
};

export type SidenavItem = {
  label: string;
  routerLink: string;
  children?: SidenavItem[];
};
