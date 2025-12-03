import { Component, forwardRef, inject, input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from '@app/components/text-input/text-input.component';
import { TypeaheadComponent } from '@app/components/typeahead/typeahead.component';
import { ForTagsDirective } from '@app/directives/for-tags.directive';
import { ConstantsService, TechRecord } from '@app/services/constants.service';
import { BaseForm } from '../base-form/base-form.form';

@Component({
  selector: 'app-documents-form',
  templateUrl: './documents.form.html',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TextInputComponent,
    TypeaheadComponent,
    ForTagsDirective,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DocumentsForm),
      multi: true,
    },
  ],
})
export class DocumentsForm extends BaseForm {
  readonly constants = inject(ConstantsService);

  readonly techRecord = input<TechRecord>();
  readonly filters = input<string[]>([]);

  override form = this.fb.group({
    techRecord_microfilm_microfilmDocumentType: this.fb.control<string | null>(null),
    techRecord_microfilm_microfilmRollNumber: this.fb.control<string | null>(null, [
      this.validators.maxLength(5, 'Microfilm roll number'),
    ]),
    techRecord_microfilm_microfilmSerialNumber: this.fb.control<string | null>(null, [
      this.validators.maxLength(4, 'Microfilm serial number'),
    ]),
  });
}
