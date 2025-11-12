import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseForm } from '../base-form/base-form.form';

@Component({
  selector: 'app-seats-and-vehicle-size-form',
  templateUrl: './seats-and-vehicle-size.form.html',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SeatsAndVehicleSizeForm),
      multi: true,
    },
  ],
})
export class SeatsAndVehicleSizeForm extends BaseForm {
  override form = this.fb.group({
    
  });
}
