import { Component, forwardRef, input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseForm } from '../base-form/base-form.form';
import { TechRecord } from '@app/services/constants.service';

@Component({
  selector: 'app-brakes-form',
  templateUrl: './brakes.form.html',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BrakesForm),
      multi: true,
    },
  ],
})
export class BrakesForm extends BaseForm {
  readonly techRecord = input<TechRecord>();
  readonly filters = input<string[]>([]);

  override form = this.fb.group({});
}
