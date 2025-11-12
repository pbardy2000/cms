import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseForm } from '../base-form/base-form.form';

@Component({
  selector: 'app-purchaser-form',
  templateUrl: './purchaser.form.html',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PurchaserForm),
      multi: true,
    },
  ],
})
export class PurchaserForm extends BaseForm {
  override form = this.fb.group({
    
  });
}
