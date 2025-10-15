import { Component, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
})
export class TabPanelComponent {
  private readonly route = inject(ActivatedRoute);

  readonly id = input.required<string>();

  readonly fragment = toSignal(this.route.fragment);
}
