import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseForm } from '../base-form/base-form.form';

@Component({
  selector: 'app-reason-for-creation-form',
  templateUrl: './reason-for-creation.form.html',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ReasonForCreationForm),
      multi: true,
    },
  ],
})
export class ReasonForCreationForm extends BaseForm {}
