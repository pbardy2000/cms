import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseForm } from '../base-form/base-form.form';

@Component({
  selector: 'app-dimensions-form',
  templateUrl: './dimensions.form.html',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DimensionsForm),
      multi: true,
    },
  ],
})
export class DimensionsForm extends BaseForm {
  override form = this.fb.group({
    
  });
}
