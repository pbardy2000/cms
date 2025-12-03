import { Component, forwardRef, input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from '@app/components/text-input/text-input.component';
import { ForTagsDirective } from '@app/directives/for-tags.directive';
import { BaseForm } from '../base-form/base-form.form';
import { TechRecord } from '@app/services/constants.service';

@Component({
  selector: 'app-last-applicant-form',
  templateUrl: './last-applicant.form.html',
  styleUrls: ['./last-applicant.form.scss'],
  imports: [FormsModule, ReactiveFormsModule, ForTagsDirective, TextInputComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LastApplicantForm),
      multi: true,
    },
  ],
})
export class LastApplicantForm extends BaseForm {
  readonly techRecord = input<TechRecord>();
  readonly filters = input<string[]>([]);

  override form = this.fb.group({
    techRecord_applicantDetails_name: this.fb.control(null, [
      this.validators.maxLength(150, 'Name or company'),
    ]),
    techRecord_applicantDetails_address1: this.fb.control(null, [
      this.validators.maxLength(60, 'Address line 1'),
    ]),
    techRecord_applicantDetails_address2: this.fb.control(null, [
      this.validators.maxLength(60, 'Address line 2'),
    ]),
    techRecord_applicantDetails_postTown: this.fb.control(null, [
      this.validators.maxLength(60, 'Town or city'),
    ]),
    techRecord_applicantDetails_address3: this.fb.control(null, [
      this.validators.maxLength(60, 'County'),
    ]),
    techRecord_applicantDetails_postCode: this.fb.control(null, [
      this.validators.maxLength(12, 'Postcode'),
    ]),
    techRecord_applicantDetails_telephoneNumber: this.fb.control(null, [
      this.validators.maxLength(25, 'Telephone number'),
    ]),
    techRecord_applicantDetails_emailAddress: this.fb.control(null, [
      this.validators.maxLength(255, 'Email address'),
      this.validators.pattern(
        new RegExp("^[\\w\\-\\.\\+']+@([\\w-]+\\.)+[\\w-]{2,}$"),
        'Enter an email address in the correct format, like name@example.com',
      ),
    ]),
  });
}
