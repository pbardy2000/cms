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

  min(min: number, error: ErrorMessage | string): ValidatorFn {
    return (control) => {
      if (!control.touched) return null;
      const key = this.inferControlKey(control);

      return control.value != null && Number.parseInt(control.value) <= min
        ? {
            min:
              typeof error === 'string'
                ? {
                    href: key,
                    label: `${error} must be greater than or equal to ${min}`,
                  }
                : error,
          }
        : null;
    };
  }

  max(max: number, error: ErrorMessage | string): ValidatorFn {
    return (control) => {
      if (!control.touched) return null;

      const key = this.inferControlKey(control);

      return control.value != null && Number.parseInt(control.value) > max
        ? {
            max:
              typeof error === 'string'
                ? {
                    href: key,
                    label: `${error} must be less than or equal to ${max}`,
                  }
                : error,
          }
        : null;
    };
  }

  minLength(min: number, error: ErrorMessage | string): ValidatorFn {
    return (control) => {
      if (!control.touched) return null;

      const key = this.inferControlKey(control);

      return control.value !== null && control.value.length < min
        ? {
            minLength:
              typeof error === 'string'
                ? {
                    href: key,
                    label: `${error} must be greater than or equal to ${min} characters`,
                  }
                : error,
          }
        : null;
    };
  }

  maxLength(max: number, error: ErrorMessage | string): ValidatorFn {
    return (control) => {
      if (!control.touched) return null;

      const key = this.inferControlKey(control);

      return control.value !== null && control.value.length > max
        ? {
            maxLength:
              typeof error === 'string'
                ? {
                    href: key,
                    label: `${error} must be ${max} characters or less`,
                  }
                : error,
          }
        : null;
    };
  }

  required(error: ErrorMessage | string): ValidatorFn {
    return (control) => {
      if (!control.touched) return null;

      const key = this.inferControlKey(control);
      const invalid = typeof control.value === 'boolean' ? false : isEmpty(control.value);

      return invalid
        ? {
            required:
              typeof error === 'string' ? { href: key, label: `${error} is required` } : error,
          }
        : null;
    };
  }

  pattern(pattern: RegExp, error: ErrorMessage): ValidatorFn {
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

      const key = this.inferControlKey(control);

      return control.value === null || /[^a-zA-Z0-9]/.test(control.value)
        ? {
            alphanumeric:
              typeof error === 'string'
                ? { href: key, label: `${error} muste be alphanumeric` }
                : error,
          }
        : null;
    };
  }

  email(error: ErrorMessage | string): ValidatorFn {
    return (control) => {
      if (!control.touched) return null;

      const key = this.inferControlKey(control);

      return control.value !== null &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(control.value)
        ? {
            email:
              typeof error === 'string'
                ? { href: key, label: `${error} must be in the past` }
                : error,
          }
        : null;
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
