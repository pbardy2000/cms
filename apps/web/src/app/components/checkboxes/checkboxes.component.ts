import { Component, forwardRef, input, model } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxesComponent),
      multi: true,
    },
  ],
})
export class CheckboxesComponent<T> implements ControlValueAccessor {
  readonly id = input<string>();
  readonly hint = input<string>();
  readonly label = input<string>();
  readonly options = input<CheckboxOption<T>[]>();

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

export type CheckboxesProps<T> = {
  type: 'checkboxes';
  id?: string;
  hint?: string;
  label?: string;
  options: CheckboxOption<T>[];
};

export type CheckboxOption<T> = {
  value: T;
  label: string;
  hint?: string;
  divider?: boolean;
  exclusive?: boolean;
};
