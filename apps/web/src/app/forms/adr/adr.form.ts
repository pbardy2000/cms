import { Component, forwardRef } from '@angular/core';
import { BaseForm } from '../base-form/base-form.form';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

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
  override form = this.fb.group({});
}
