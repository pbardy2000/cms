import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseForm } from '../base-form/base-form.form';

@Component({
  selector: 'app-manufacturer-form',
  templateUrl: './manufacturer.form.html',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ManufacturerForm),
      multi: true,
    },
  ],
})
export class ManufacturerForm extends BaseForm {
  override form = this.fb.group({
    
  });
}
