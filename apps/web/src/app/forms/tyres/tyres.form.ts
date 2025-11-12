import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseForm } from '../base-form/base-form.form';

@Component({
  selector: 'app-tyres-form',
  templateUrl: './tyres.form.html',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TyresForm),
      multi: true,
    },
  ],
})
export class TyresForm extends BaseForm {
  override form = this.fb.group({
    
  });
}
