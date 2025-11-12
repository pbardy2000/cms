import { Component, input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
})
export class AccordionComponent {
  readonly id = input<string>();
}
