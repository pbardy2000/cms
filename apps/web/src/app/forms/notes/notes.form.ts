import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseForm } from '../base-form/base-form.form';

@Component({
  selector: 'app-notes-form',
  templateUrl: './notes.form.html',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NotesForm),
      multi: true,
    },
  ],
})
export class NotesForm extends BaseForm {
  override form = this.fb.group({
    techRecord_notes: this.fb.control<string | undefined>({ value: undefined, disabled: false }, [
      this.validators.maxLength(1024, 'Notes'),
    ]),
    techRecord_remarks: this.fb.control<string | undefined>({ value: undefined, disabled: false }, [
      this.validators.maxLength(1024, 'Notes'),
    ]),
    techRecord_dispensations: this.fb.control<string | undefined>({ value: undefined, disabled: false }, [
      this.validators.maxLength(160, 'Dispensations'),
    ]),
  });
}
