import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseForm } from '../base-form/base-form.form';

@Component({
  selector: 'app-authorisation-into-service-form',
  templateUrl: './authorisation-into-service.html',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorisationIntoServiceForm),
      multi: true,
    },
  ],
})
export class AuthorisationIntoServiceForm extends BaseForm {
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
