import { Component, forwardRef, inject, input, model } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RADIOS } from '../radios/radios.model';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  imports: [FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true,
    },
  ],
})
export class RadioComponent<T> implements ControlValueAccessor {
  readonly radios = inject(RADIOS, { optional: true });

  readonly id = input<string>();
  readonly name = input<string>('');
  readonly hint = input<string>();
  readonly label = input<string>();

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

export type RadioProps<T> = {
  type: 'radio';
  value: T;
  id?: string;
  hint?: string;
  label?: string;
};
