import { Component, forwardRef, input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from '@app/components/text-input/text-input.component';
import { TextareaComponent } from '@app/components/textarea/textarea.component';
import { ForTagsDirective } from '@app/directives/for-tags.directive';
import { BaseForm } from '../base-form/base-form.form';
import { TechRecord } from '@app/services/constants.service';

@Component({
  selector: 'app-purchaser-form',
  templateUrl: './purchaser.form.html',
  styleUrls: ['./purchaser.form.scss'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ForTagsDirective,
    TextInputComponent,
    TextareaComponent,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PurchaserForm),
      multi: true,
    },
  ],
})
export class PurchaserForm extends BaseForm {
  readonly techRecord = input<TechRecord>();
  readonly filters = input<string[]>([]);

  override form = this.fb.group({
    techRecord_purchaserDetails_name: this.fb.control(null, [
      this.validators.maxLength(150, 'Name or company'),
    ]),
    techRecord_purchaserDetails_address1: this.fb.control(null, [
      this.validators.maxLength(60, 'Address line 1'),
    ]),
    techRecord_purchaserDetails_address2: this.fb.control(null, [
      this.validators.maxLength(60, 'Address line 2'),
    ]),
    techRecord_purchaserDetails_postTown: this.fb.control(null, [
      this.validators.maxLength(60, 'Town or city'),
    ]),
    techRecord_purchaserDetails_address3: this.fb.control(null, [
      this.validators.maxLength(60, 'County'),
    ]),
    techRecord_purchaserDetails_postCode: this.fb.control(null, [
      this.validators.maxLength(12, 'Postcode'),
    ]),
    techRecord_purchaserDetails_telephoneNumber: this.fb.control(null, [
      this.validators.maxLength(25, 'Telephone number'),
    ]),
    techRecord_purchaserDetails_emailAddress: this.fb.control(null, [
      this.validators.maxLength(255, 'Email address'),
      this.validators.pattern(
        new RegExp("^[\\w\\-\\.\\+']+@([\\w-]+\\.)+[\\w-]{2,}$"),
        'Enter an email address in the correct format, like name@example.com',
      ),
    ]),
    techRecord_purchaserDetails_faxNumber: this.fb.control(null),
    techRecord_purchaserDetails_purchaserNotes: this.fb.control(null, [
      this.validators.maxLength(1024, 'Purchaser notes'),
    ]),
  });
}
