import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ErrorService {
  extract(control: AbstractControl, errors: Error[] = []): Error[] {
    if (control.errors) {
      errors.push(...Object.values(control.errors));
    }

    if (control instanceof FormGroup) {
      Object.values(control.controls).forEach((c) => this.extract(c, errors));
    }

    if (control instanceof FormArray) {
      control.controls.forEach((c) => this.extract(c, errors));
    }

    return errors;
  }

  markAllAsTouched(control: AbstractControl): void {
    control.markAsTouched();
    control.updateValueAndValidity();

    if (control instanceof FormGroup) {
      Object.values(control.controls).forEach((c) => {
        this.markAllAsTouched(c);
      });
    }

    if (control instanceof FormArray) {
      control.controls.forEach((c) => this.markAllAsTouched(c));
    }
  }
}

export type Error = {
  href: string;
  label: string;
};
