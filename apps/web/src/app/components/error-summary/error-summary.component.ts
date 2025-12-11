import { Component, DOCUMENT, inject, input } from '@angular/core';
import { Error } from '@app/services/error.service';

@Component({
  selector: 'app-error-summary',
  templateUrl: './error-summary.component.html',
  imports: [],
})
export class ErrorSummaryComponent {
  readonly document = inject(DOCUMENT);

  readonly errors = input<Error[]>([]);

  onClick(error: Error): void {
    const element = this.document.getElementById(error.href);
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    element?.focus();
  }
}
