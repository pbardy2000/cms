import { AsyncPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  imports: [AsyncPipe, RouterLink],
})
export class BreadcrumbsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly theme = input<'default' | 'inversed'>('default');
  readonly collapseOnMobile = input<boolean>(false);

  readonly breadcrumbs = this.router.events.pipe(
    map(() => {
      let depth = 0;
      let breadcrumbs: Breadcrumb[] = [{ label: 'Home', routerLink: '/' }];
      let frontier = this.route.snapshot.root.children;

      while (frontier.length && depth < 10) {
        depth++;

        const current = frontier.shift();
        if (current && current.children.length) {
          const parent = breadcrumbs[breadcrumbs.length - 1];
          for (const child of current.children) {
            if (typeof child?.routeConfig?.title === 'string') {
              let routerLink = child.pathFromRoot
                .map((segment) => {
                  const path = segment.routeConfig?.path || '';
                  const parts = path.split('/').map((part) => {
                    if (part.startsWith(':')) {
                      const key = part.slice(1, part.length);
                      const param = child.paramMap.get(key);
                      return param;
                    }

                    return part;
                  });

                  return parts.join('/');
                })
                .join('/')
                .replaceAll('//', '/');

              if (routerLink.endsWith('/')) {
                routerLink = routerLink.slice(0, -1);
              }

              if (!parent || parent.routerLink !== routerLink) {
                const label = child.routeConfig?.title || '';
                breadcrumbs.push({ label, routerLink });
              }
            }

            frontier.push(child);
          }
        }
      }

      return breadcrumbs;
    }),
  );
}

type Breadcrumb = {
  label: string;
  routerLink: string;
};
