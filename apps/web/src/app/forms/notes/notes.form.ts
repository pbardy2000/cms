import { Component, forwardRef, input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { TextareaComponent } from '@app/components/textarea/textarea.component';
import { ForTagsDirective } from '@app/directives/for-tags.directive';
import { TechRecord } from '@app/services/constants.service';
import { BaseForm } from '../base-form/base-form.form';

@Component({
  selector: 'app-notes-form',
  templateUrl: './notes.form.html',
  imports: [FormsModule, ReactiveFormsModule, ForTagsDirective, TextareaComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NotesForm),
      multi: true,
    },
  ],
})
export class NotesForm extends BaseForm {
  readonly techRecord = input<TechRecord>();
  readonly filters = input<string[]>([]);

  override form = this.fb.group({
    techRecord_notes: this.fb.control<string | undefined>({ value: undefined, disabled: false }, [
      this.validators.maxLength(1024, 'Notes'),
    ]),
    techRecord_remarks: this.fb.control<string | undefined>({ value: undefined, disabled: false }, [
      this.validators.maxLength(1024, 'Notes'),
    ]),
    techRecord_dispensations: this.fb.control<string | undefined>(
      { value: undefined, disabled: false },
      [this.validators.maxLength(160, 'Dispensations')],
    ),
  });
}
