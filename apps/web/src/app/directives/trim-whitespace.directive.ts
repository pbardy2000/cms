import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appTrimWhitespace]',
})
export class TrimWhitespaceDirective {
  @HostListener('focusout', ['$event'])
  onBlur(event: FocusEvent): void {
    const input = event.target as HTMLInputElement;
    const oldValue = input.value;
    input.value = input.value.trim();

    if (input.value !== oldValue) input.dispatchEvent(new Event('input'));
  }

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const oldValue = input.value;
    input.value = input.value.trim();

    if (input.value !== oldValue) input.dispatchEvent(new Event('input'));
  }
}
