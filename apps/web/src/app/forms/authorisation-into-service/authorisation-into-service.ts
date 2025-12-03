import { Component, forwardRef, input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { DateInputComponent } from '@app/components/date-input/date-input.component';
import { ForTagsDirective } from '@app/directives/for-tags.directive';
import { BaseForm } from '../base-form/base-form.form';
import { TechRecord } from '@app/services/constants.service';

@Component({
  selector: 'app-authorisation-into-service-form',
  templateUrl: './authorisation-into-service.html',
  styleUrls: ['./authorisation-into-service.scss'],
  imports: [FormsModule, ReactiveFormsModule, ForTagsDirective, DateInputComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorisationIntoServiceForm),
      multi: true,
    },
  ],
})
export class AuthorisationIntoServiceForm extends BaseForm {
  readonly techRecord = input<TechRecord>();
  readonly filters = input<string[]>([]);

  override form = this.fb.group({
    techRecord_authIntoService_cocIssueDate: this.fb.control<string | null>(null, [
      this.validators.dateInPast('COC issue date'),
      this.validators.date('COC issue date'),
    ]),
    techRecord_authIntoService_dateReceived: this.fb.control<string | null>(null, [
      this.validators.dateInPast('Date received'),
      this.validators.date('Date received'),
    ]),
    techRecord_authIntoService_datePending: this.fb.control<string | null>(null, [
      this.validators.date('Date pending'),
    ]),
    techRecord_authIntoService_dateAuthorised: this.fb.control<string | null>(null, [
      this.validators.dateInPast('Date authorised'),
      this.validators.date('Date authorised'),
    ]),
    techRecord_authIntoService_dateRejected: this.fb.control<string | null>(null, [
      this.validators.dateInPast('Date rejected'),
      this.validators.date('Date rejected'),
    ]),
  });
}
