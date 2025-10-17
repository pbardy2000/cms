import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoSpace]',
})
export class NoSpaceDirective {
  @HostListener('keydown', ['$event'])
  onKeyDown(e: KeyboardEvent): void {
    if (e.key === ' ' || e.key === 'Space') {
      e.preventDefault();
    }
  }

  @HostListener('focusout', ['$event'])
  onBlur(event: FocusEvent): void {
    const input = event.target as HTMLInputElement;
    const oldValue = input.value;
    input.value = input.value.replace(/\s/g, '');

    if (input.value !== oldValue) input.dispatchEvent(new Event('input'));
  }

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const oldValue = input.value;
    input.value = input.value.replace(/\s/g, '');

    if (input.value !== oldValue) input.dispatchEvent(new Event('input'));
  }
}
