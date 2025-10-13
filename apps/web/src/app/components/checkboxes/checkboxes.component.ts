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
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss'],
  imports: [FormsModule, ErrorMessageComponent, CheckboxComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxesComponent),
      multi: true,
    },
  ],
})
export class CheckboxesComponent<T> implements ControlValueAccessor, AfterViewInit, OnDestroy {
  private readonly injector = inject(Injector);

  readonly id = input<string>();
  readonly hint = input<string>();
  readonly label = input<string>();
  readonly size = input<'small' | 'regular'>('regular');
  readonly options = input<CheckboxOption<T>[]>();

  readonly value = model<T | T[]>();
  readonly disabled = model(false);

  private readonly destroy = new ReplaySubject<boolean>(1);
  readonly error = signal<string>('');

  onChange = (_: T | T[]) => {};
  onTouched = () => {};

  writeValue(obj: T): void {
    this.value.set(obj);
  }

  registerOnChange(fn: (_: T | T[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  toggle(option: T, exclusive = false): void {
    if (exclusive) {
      this.value.set(option);
      this.onChange(option);
      return;
    }

    const value = this.value();
    const set = new Set(Array.isArray(value) ? value : []);
    set.has(option) ? set.delete(option) : set.add(option);
    const array = Array.from(set);
    this.value.set(array);
    this.onChange(array);
  }

  isChecked(option: T): boolean {
    const value = this.value();

    if (Array.isArray(value)) {
      return value.includes(option);
    }

    return value === option;
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

export type CheckboxesProps<T> = {
  type: 'checkboxes';
  id?: string;
  hint?: string;
  label?: string;
  options: CheckboxOption<T>[];
};

export type CheckboxOption<T> = {
  id?: string;
  value: T;
  label: string;
  hint?: string;
  divider?: boolean;
  exclusive?: boolean;
};
