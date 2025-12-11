import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormGroup, ValidatorFn } from '@angular/forms';
import { ErrorMessage } from './constants.service';

function isEmpty(value: unknown): boolean {
  return value == null || value === '' || (Array.isArray(value) && value.length === 0);
}

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  toggle(control: AbstractControl, validator: ValidatorFn): void {
    control.hasValidator(validator)
      ? control.removeValidators(validator)
      : control.addValidators(validator);
  }

  inferControlKey(control: AbstractControl): string | number | null {
    if (!control.parent) return null;

    if (control.parent instanceof FormArray) {
      const key = control.parent.controls.indexOf(control);
      if (control.parent !== control.root) {
        const parentKey = this.inferControlKey(control.parent);
        return parentKey ? `${parentKey}-${key}` : key;
      }
    }

    if (control.parent instanceof FormGroup) {
      for (const key in control.parent.controls) {
        if (control.parent.controls[key] === control) {
          return control.parent === control.root
            ? key
            : `${this.inferControlKey(control.parent)}-${key}`;
        }
      }
    }

    return null;
  }

  min(min: number, error: string): ValidatorFn {
    return (control) => {
      if (!control.touched) return null;

      if (control.value != null && Number.parseInt(control.value) <= min) {
        const href = this.inferControlKey(control);
        return { href, label: `${error} must be greater than or equal to ${min}` };
      }

      return null;
    };
  }

  max(max: number, error: string): ValidatorFn {
    return (control) => {
      if (!control.touched) return null;

      if (control.value != null && Number.parseInt(control.value) > max) {
        const href = this.inferControlKey(control);
        return { href, label: `${error} must be less than or equal to ${max}` };
      }

      return null;
    };
  }

  minLength(min: number, error: string): ValidatorFn {
    return (control) => {
      if (!control.touched) return null;

      if (control.value !== null && control.value.length < min) {
        const href = this.inferControlKey(control);
        return { href, label: `${error} must be greater than or equal to ${min} characters` };
      }

      return null;
    };
  }

  maxLength(max: number, error: string): ValidatorFn {
    return (control) => {
      if (!control.touched) return null;

      if (control.value !== null && control.value.length > max) {
        const href = this.inferControlKey(control);
        return { href, label: `${error} must be ${max} characters or less` };
      }

      return null;
    };
  }

  required(error: string): ValidatorFn {
    return (control) => {
      if (!control.touched) return null;

      if (typeof control.value === 'boolean' ? false : isEmpty(control.value)) {
        const href = this.inferControlKey(control);
        return { required: { href, label: `${error} is required` } };
      }

      return null;
    };
  }

  pattern(pattern: RegExp, error: ErrorMessage | string): ValidatorFn {
    return (control) => {
      if (!control.touched) return null;

      return control.value !== null && !pattern.test(control.value) ? { pattern: error } : null;
    };
  }

  antipattern(pattern: RegExp, error?: ErrorMessage): ValidatorFn {
    return (control) => {
      if (!control.touched) return null;

      return control.value !== null && pattern.test(control.value)
        ? { antipattern: error || true }
        : null;
    };
  }

  alphanumeric(error: ErrorMessage | string): ValidatorFn {
    return (control) => {
      if (!control.touched) return null;

      if (control.value === null || /[^a-zA-Z0-9]/.test(control.value)) {
        const href = this.inferControlKey(control);
        return { href, label: `${error} must be alphanumeric` };
      }

      return null;
    };
  }

  email(error: ErrorMessage | string): ValidatorFn {
    return (control) => {
      if (!control.touched) return null;

      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (control.value !== null && !regex.test(control.value)) {
        const href = this.inferControlKey(control);
        return { href, label: `${error} must be a valid email address` };
      }

      return null;
    };
  }

  date(error: ErrorMessage | string): ValidatorFn {
    return (control) => {
      return null;
    };
  }

  dateInPast(error: ErrorMessage | string): ValidatorFn {
    return (control) => {
      if (!control.touched) return null;

      const key = this.inferControlKey(control);

      return control.value !== null && new Date(control.value).getTime() < Date.now()
        ? {
            dateInPast:
              typeof error === 'string'
                ? { href: key, label: `${error} must be in the past` }
                : error,
          }
        : null;
    };
  }

  dateInFuture(error?: ErrorMessage): ValidatorFn {
    return (control) => {
      if (!control.touched) return null;

      return control.value !== null && new Date(control.value).getTime() > Date.now()
        ? { dateInFuture: error || true }
        : null;
    };
  }
}
