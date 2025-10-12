import { Component, forwardRef, input, model } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { CheckboxComponent, CheckboxProps } from '../checkbox/checkbox.component';
import { CheckboxesComponent, CheckboxesProps } from '../checkboxes/checkboxes.component';
import { DateInputComponent, DateInputProps } from '../date-input/date-input.component';
import { RadioComponent, RadioProps } from '../radio/radio.component';
import { RadiosComponent, RadiosProps } from '../radios/radios.component';
import { SelectComponent, SelectProps } from '../select/select.component';
import { TextInputComponent, TextInputProps } from '../text-input/text-input.component';
import { TextareaComponent, TextareaProps } from '../textarea/textarea.component';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  imports: [
    CheckboxComponent,
    CheckboxesComponent,
    DateInputComponent,
    RadioComponent,
    RadiosComponent,
    SelectComponent,
    TextInputComponent,
    TextareaComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormControlComponent),
      multi: true,
    },
  ],
})
export class FormControlComponent<T> implements ControlValueAccessor {
  readonly props = input.required<FormControlProps<T>>();
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

export type FormControlProps<T> =
  | CheckboxProps<T>
  | CheckboxesProps<T>
  | DateInputProps
  | RadioProps<T>
  | RadiosProps<T>
  | SelectProps<T>
  | TextInputProps
  | TextareaProps;
