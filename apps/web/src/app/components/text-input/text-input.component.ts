import {
  AfterViewInit,
  Component,
  forwardRef,
  inject,
  Injector,
  input,
  model,
  OnDestroy,
  signal,
} from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { ReplaySubject, startWith, takeUntil } from 'rxjs';
import { ErrorMessageComponent } from '../error-message/error-message.component';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  imports: [FormsModule, ErrorMessageComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    },
  ],
})
export class TextInputComponent implements ControlValueAccessor, AfterViewInit, OnDestroy {
  private readonly injector = inject(Injector);

  readonly id = input<string>();
  readonly name = input<string>('');
  readonly hint = input<string>();
  readonly label = input<string>();
  readonly prefix = input<string>();
  readonly suffix = input<string>();
  readonly placeholder = input<string>();
  readonly type = input<'text' | 'number' | 'decimal' | 'password'>('text');
  readonly letterspacing = input<'normal' | 'wide'>('normal');
  readonly spellcheck = input<HTMLInputElement['spellcheck']>(false);
  readonly autocomplete = input<HTMLInputElement['autocomplete']>('off');
  readonly autocapitalize = input<HTMLInputElement['autocapitalize']>('off');

  readonly value = model<string | null>(null);
  readonly disabled = model(false);

  readonly error = signal<string>('');
  private readonly destroy = new ReplaySubject<boolean>(1);

  onChange = (_: string | null) => {};
  onTouched = () => {};

  writeValue(obj: string | null): void {
    this.value.set(obj);
  }

  registerOnChange(fn: (_: string | null) => void): void {
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

export type TextInputProps = {
  type: 'text-input';
  id?: string;
  hint?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
};
