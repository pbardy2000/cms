import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ServiceNavigationLinkComponent } from './components/service-navigation/service-navigation-link/service-navigation-link.component';
import { ServiceNavigationComponent } from './components/service-navigation/service-navigation.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SkipLinkComponent } from './components/skip-link/skip-link.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SkipLinkComponent,
    HeaderComponent,
    ServiceNavigationComponent,
    ServiceNavigationLinkComponent,
    BreadcrumbsComponent,
    FooterComponent,
    SidenavComponent,
  ],
  templateUrl: './app.html',
})
export class App {}
