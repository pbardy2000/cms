import { Component, input, model } from '@angular/core';
import { AccordionSectionToggleComponent } from '../accordion-section-toggle/accordion-section-toggle.component';

@Component({
  selector: 'app-accordion-section',
  templateUrl: './accordion-section.component.html',
  styleUrls: ['./accordion-section.component.scss'],
  imports: [AccordionSectionToggleComponent],
})
export class AccordionSectionComponent {
  readonly id = input<string>();
  readonly heading = input<string>();
  readonly summary = input<string>();
  readonly compact = input<boolean>(true);
  readonly disabled = model<boolean>(false);
  readonly expanded = model<boolean>(false);

  toggle(): void {
    this.expanded.set(!this.expanded());
  }
}
