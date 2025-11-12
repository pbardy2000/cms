import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormArray,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { ValidatorsService } from '@app/services/validators.service';
import { ReplaySubject, takeUntil } from 'rxjs';

@Component({ template: '' })
export abstract class BaseForm<
    T extends FormGroup | FormArray = FormGroup,
    U extends FormGroup | FormArray = FormGroup,
  >
  implements ControlValueAccessor, OnInit, OnDestroy
{
  protected readonly fb = inject(FormBuilder);
  protected readonly validators = inject(ValidatorsService);
  protected readonly controlContainer = inject(ControlContainer, { optional: true });

  protected readonly destroy = new ReplaySubject<boolean>(1);

  form!: T;

  onChange = (_: unknown) => {};
  onTouched = () => {};

  get parent(): U | null {
    return this.controlContainer?.control as U;
  }

  writeValue(obj: any): void {
    this.form.setValue(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.form.valueChanges.pipe(takeUntil(this.destroy)).subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.form.disable() : this.form.enable();
  }

  ngOnInit(): void {
    const parent = this.parent;

    if (parent instanceof FormArray) {
      parent.push(this.form);
    }

    if (parent instanceof FormGroup) {
      Object.entries(this.form.controls).forEach(([key, control]) => {
        parent.addControl(key, control, { emitEvent: false });
      });
    }
  }

  ngOnDestroy(): void {
    const parent = this.parent;

    if (parent instanceof FormArray) {
      parent.removeAt(parent.controls.indexOf(this.form));
    }

    if (parent instanceof FormGroup) {
      Object.keys(this.form.controls).forEach((key) => {
        parent.removeControl(key, { emitEvent: false });
      });
    }
  }
}
