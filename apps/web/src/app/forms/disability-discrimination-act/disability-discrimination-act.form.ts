import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseForm } from '../base-form/base-form.form';

@Component({
  selector: 'app-disability-discrimination-act-form',
  templateUrl: './disability-discrimination-act.form.html',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DisabilityDiscriminationActForm),
      multi: true,
    },
  ],
})
export class DisabilityDiscriminationActForm extends BaseForm {
  override form = this.fb.group({
    
  });
}
