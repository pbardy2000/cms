import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseForm } from '../base-form/base-form.form';

@Component({
  selector: 'app-last-applicant-form',
  templateUrl: './last-applicant.form.html',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LastApplicantForm),
      multi: true,
    },
  ],
})
export class LastApplicantForm extends BaseForm {
  override form = this.fb.group({
    
  });
}
