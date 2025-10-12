import { Component, forwardRef, input, model } from '@angular/core';
import { CheckboxControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent<T> extends CheckboxControlValueAccessor {
  readonly hint = input<string>();
  readonly label = input<string>();

  readonly value = model<T>();
  readonly disabled = model(false);
}

export type CheckboxProps<T> = {
  type: 'checkbox';
  value: T;
  id?: string;
  hint?: string;
  label?: string;
  disabled?: boolean;
};
