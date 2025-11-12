import { Component, input } from '@angular/core';

@Component({
  selector: 'app-accordion-section-toggle',
  templateUrl: './accordion-section-toggle.component.html',
})
export class AccordionSectionToggleComponent {
  readonly expanded = input.required<boolean>();
}
