import { Component, forwardRef } from '@angular/core';
import { BaseForm } from '../base-form/base-form.form';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-authorisation-into-service-form',
  templateUrl: './authorisation-into-service.html',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorisationIntoServiceForm),
      multi: true,
    },
  ],
})
export class AuthorisationIntoServiceForm extends BaseForm {
  override form = this.fb.group({
    
  });
}
