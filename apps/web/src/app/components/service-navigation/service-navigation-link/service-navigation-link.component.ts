import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-service-navigation-link',
  templateUrl: './service-navigation-link.component.html',
  imports: [RouterLink, RouterLinkActive],
})
export class ServiceNavigationLinkComponent {
  routerLink = input<string>('');
}
