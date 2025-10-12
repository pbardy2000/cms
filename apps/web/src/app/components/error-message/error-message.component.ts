import { Component, input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  imports: [],
})
export class ErrorMessageComponent {
  readonly id = input<string>();
}
