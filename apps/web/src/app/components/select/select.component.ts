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
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { ReplaySubject, startWith, takeUntil } from 'rxjs';
import { ErrorMessageComponent } from '../error-message/error-message.component';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  imports: [FormsModule, ErrorMessageComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent<T> implements ControlValueAccessor, AfterViewInit, OnDestroy {
  private readonly injector = inject(Injector);

  readonly id = input<string>();
  readonly name = input<string>('');
  readonly hint = input<string>();
  readonly label = input<string>();
  readonly placeholder = input<string>();
  readonly options = input<SelectOption<T>[]>();

  readonly value = model<T>();
  readonly disabled = model(false);

  private readonly destroy = new ReplaySubject<boolean>(1);
  readonly error = signal<string>('');

  onChange = (_: T) => {};
  onTouched = () => {};

  writeValue(obj: T): void {
    this.value.set(obj);
  }

  registerOnChange(fn: (_: T) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
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
                const error = Object.values(control.control.errors)[0];
                this.error.set(typeof error === 'string' ? error : error.label);
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

export type SelectProps<T> = {
  type: 'select';
  id?: string;
  hint?: string;
  label?: string;
  placeholder?: string;
  options: SelectOption<T>[];
};

export type SelectOption<T> = {
  value: T;
  label: string;
  id?: string;
  disabled?: boolean;
};
