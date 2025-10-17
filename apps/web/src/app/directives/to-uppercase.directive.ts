import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appToUppercase]',
})
export class ToUppercaseDirective {
  @HostListener('focusout', ['$event'])
  public onBlur(event: FocusEvent): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.toUpperCase();
    input.dispatchEvent(new Event('input'));
  }
}
