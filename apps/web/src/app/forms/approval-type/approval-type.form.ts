import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseForm } from '../base-form/base-form.form';

@Component({
  selector: 'app-approval-type-form',
  templateUrl: './approval-type.form.html',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ApprovalTypeForm),
      multi: true,
    },
  ],
})
export class ApprovalTypeForm extends BaseForm {}
