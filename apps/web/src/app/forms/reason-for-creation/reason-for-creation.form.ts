import { Component, forwardRef, input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { TextareaComponent } from '@app/components/textarea/textarea.component';
import { ForTagsDirective } from '@app/directives/for-tags.directive';
import { TechRecord } from '@app/services/constants.service';
import { BaseForm } from '../base-form/base-form.form';

@Component({
  selector: 'app-reason-for-creation-form',
  templateUrl: './reason-for-creation.form.html',
  imports: [FormsModule, ReactiveFormsModule, ForTagsDirective, TextareaComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ReasonForCreationForm),
      multi: true,
    },
  ],
})
export class ReasonForCreationForm extends BaseForm {
  readonly techRecord = input<TechRecord>();
  readonly filters = input<string[]>([]);

  override form = this.fb.group({
    techRecord_reasonForCreation: this.fb.control('', [
      this.validators.required('Reason for creation'),
      this.validators.maxLength(100, 'Reason for creation'),
    ]),
  });
}
