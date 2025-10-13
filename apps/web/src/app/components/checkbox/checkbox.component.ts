import {
  AfterViewInit,
  Component,
  Injector,
  OnDestroy,
  forwardRef,
  inject,
  input,
  model,
  signal,
} from '@angular/core';
import {
  CheckboxControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControl,
} from '@angular/forms';
import { ReplaySubject, startWith, takeUntil } from 'rxjs';
import { CHECKBOXES } from '../checkboxes/checkboxes.model';
import { ErrorMessageComponent } from '../error-message/error-message.component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  imports: [FormsModule, ErrorMessageComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent<T>
  extends CheckboxControlValueAccessor
  implements AfterViewInit, OnDestroy
{
  private readonly injector = inject(Injector);
  readonly checkboxes = inject(CHECKBOXES, { optional: true });

  readonly id = input<string>();
  readonly name = input<string>();
  readonly hint = input<string>();
  readonly label = input<string>();
  readonly title = input<string>();
  readonly size = input<'small' | 'regular'>('regular');
  readonly exclusive = input<boolean>(false);

  readonly value = model<T>();
  readonly disabled = model(false);
  readonly checked = model(false);

  private readonly destroy = new ReplaySubject<boolean>(1);
  readonly error = signal<string>('');

  isChecked() {
    return this.checkboxes ? this.checkboxes.isChecked(this.value()) : this.checked();
  }

  toggle(event: Event): void {
    if (this.checkboxes) {
      return this.checkboxes.toggle(this.value(), this.exclusive());
    }

    if (event.target instanceof HTMLInputElement) {
      this.writeValue(event.target.checked ? this.value() : false);
    }
  }

  ngAfterViewInit(): void {
    const control = this.injector.get<NgControl>(NgControl);
    if (control.control && control.control.statusChanges) {
      control.control.statusChanges
        .pipe(startWith(control.control.status), takeUntil(this.destroy))
        .subscribe((status) => {
          switch (status) {
            case 'VALID':
            case 'PENDING':
            case 'DISABLED':
              this.error.set('');
              break;
            case 'INVALID':
              if (control.control && control.control.errors) {
                const errors = Object.values(control.control.errors);
                this.error.set(errors[0]);
              }
              break;
          }
        });
    }
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.complete();
  }
}

export type CheckboxProps<T> = {
  type: 'checkbox';
  value: T;
  id?: string;
  hint?: string;
  label?: string;
  disabled?: boolean;
};
