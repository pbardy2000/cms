import { Component, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
})
export class TabComponent {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly id = input.required<string>();
  readonly toggleVisibilityOnClick = input<boolean>(false);

  readonly fragment = toSignal(this.route.fragment);

  onClick() {
    if (this.fragment() === this.id() && this.toggleVisibilityOnClick()) {
      this.router.navigate([], {
        fragment: '',
        queryParamsHandling: 'preserve',
      });
    } else {
      this.router.navigate([], {
        fragment: this.id(),
        queryParamsHandling: 'preserve',
      });
    }
  }
}
