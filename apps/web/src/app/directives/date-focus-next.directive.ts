import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[appDateFocusNext]',
})
export class DateFocusNextDirective {
  private readonly el = inject(ElementRef);
  readonly dateTime = input<boolean>(false);

  @HostListener('input')
  onInput() {
    const id = String(this.el.nativeElement.id);
    const value = String(this.el.nativeElement.value);
    const segments = id.split('-');
    const currentEl = segments.splice(-1).at(0);
    const nextEl = this.getNextElement(currentEl, value);
    if (!nextEl) return;

    document.getElementById(`${segments.join('-')}-${nextEl}`)?.focus();
  }

  getNextElement(currentEl: string | undefined, value: string) {
    const dt = this.dateTime();
    if (value.length === 2 && currentEl === 'day') return 'month';
    if (value.length === 2 && currentEl === 'month') return 'year';
    if (value.length === 2 && currentEl === 'hour') return 'minute';
    if (value.length === 2 && currentEl === 'minute') return 'second';
    if (value.length === 4 && currentEl === 'year' && dt) return 'hour';

    return undefined;
  }
}
