import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseForm } from '../base-form/base-form.form';

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
  override form = this.fb.group({
    
  });
}
