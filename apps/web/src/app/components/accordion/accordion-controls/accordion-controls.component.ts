import { Component, contentChildren, effect, input, linkedSignal, model } from '@angular/core';
import { AccordionSectionComponent } from '../accordion-section/accordion-section.component';

@Component({
  selector: 'app-accordion-controls',
  templateUrl: './accordion-controls.component.html',
})
export class AccordionControlsComponent {
  readonly id = input<string>('', { alias: 'id' });
  readonly expanded = model<boolean>(false, { alias: 'expanded' });
  readonly children = contentChildren(AccordionSectionComponent, { descendants: true });
  readonly allExpanded = linkedSignal(() => this.children()?.every((c) => c.expanded()));

  constructor() {
    effect(() => {
      if (this.expanded()) {
        this.children()?.forEach((c) => c.expanded.set(true));
      }
    });
  }

  toggle(): void {
    const state = !this.allExpanded();
    this.expanded.set(state);
    this.children()?.forEach((c) => c.expanded.set(state));
  }
}
