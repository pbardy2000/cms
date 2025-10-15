import { Component, computed, effect, inject, model } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
})
export class TabsComponent {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly id = model<string>('');
  readonly selected = model<string>('');
  readonly uniqueId = computed(() => `${this.id()}-${this.selected()}`);

  private readonly fragment = toSignal(this.route.fragment);

  constructor() {
    effect(() => {
      if (this.fragment() === null && this.selected()) {
        this.router.navigate([], {
          fragment: this.uniqueId(),
          queryParamsHandling: 'preserve',
        });
      }
    });
  }
}
