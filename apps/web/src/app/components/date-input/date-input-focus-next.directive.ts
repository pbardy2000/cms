import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[govukDateFocusNext]',
  standalone: true,
})
export class DateFocusNextDirective {
  el = inject(ElementRef);
  nextId = input('', { alias: 'govukDateFocusNext' });

  @HostListener('input')
  onInput() {
    const next = this.nextId();

    if (next && this.el.nativeElement.value?.length === this.el.nativeElement.maxLength) {
      document.getElementById(next)?.focus();
    }
  }
}
