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
import { RadioComponent } from '../radio/radio.component';
import { RADIOS } from './radios.model';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.scss'],
  imports: [FormsModule, ErrorMessageComponent, RadioComponent],
  providers: [
    { provide: RADIOS, useExisting: forwardRef(() => RadiosComponent) },

    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadiosComponent),
      multi: true,
    },
  ],
})
export class RadiosComponent<T> implements ControlValueAccessor, AfterViewInit, OnDestroy {
  private readonly injector = inject(Injector);

  readonly id = input<string>();
  readonly name = input<string>('');
  readonly hint = input<string>();
  readonly label = input<string>();
  readonly size = input<'small' | 'regular'>('regular');
  readonly orientation = input<'horizontal' | 'vertical'>('vertical');
  readonly options = input<RadioOption<T>[]>();

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

export type RadiosProps<T> = {
  type: 'radios';
  id?: string;
  hint?: string;
  label?: string;
  options: RadioOption<T>[];
};

export type RadioOption<T> = {
  id?: string;
  value: T;
  label: string;
  hint?: string;
  divider?: string;
};
