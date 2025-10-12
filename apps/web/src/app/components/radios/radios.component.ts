import { Component, forwardRef, input, model } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadiosComponent),
      multi: true,
    },
  ],
})
export class RadiosComponent<T> implements ControlValueAccessor {
  readonly id = input<string>();
  readonly hint = input<string>();
  readonly label = input<string>();
  readonly options = input<RadioOption<T>[]>();

  readonly value = model<T>();
  readonly disabled = model(false);

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
}

export type RadiosProps<T> = {
  type: 'radios';
  id?: string;
  hint?: string;
  label?: string;
  options: RadioOption<T>[];
};

export type RadioOption<T> = {
  value: T;
  label: string;
  hint?: string;
};
