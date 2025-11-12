import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseForm } from '../base-form/base-form.form';

@Component({
  selector: 'app-documents-form',
  templateUrl: './documents.form.html',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DocumentsForm),
      multi: true,
    },
  ],
})
export class DocumentsForm extends BaseForm {
  override form = this.fb.group({
    
  });
}
