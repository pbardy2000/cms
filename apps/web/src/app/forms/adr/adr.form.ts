import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseForm } from '../base-form/base-form.form';

@Component({
  selector: 'app-adr-form',
  templateUrl: './adr.form.html',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AdrForm),
      multi: true,
    },
  ],
})
export class AdrForm extends BaseForm {
  override form = this.fb.group({
    
  });
}
