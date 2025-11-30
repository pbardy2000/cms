import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseForm } from '../base-form/base-form.form';

@Component({
  selector: 'app-manufacturer-form',
  templateUrl: './manufacturer.form.html',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ManufacturerForm),
      multi: true,
    },
  ],
})
export class ManufacturerForm extends BaseForm {
  override form = this.fb.group({
    techRecord_manufacturerDetails_name: this.fb.control(null, [
			this.validators.maxLength(150, 'Name or company'),
		]),
		techRecord_manufacturerDetails_address1: this.fb.control(null, [
			this.validators.maxLength(60, 'Address line 1'),
		]),
		techRecord_manufacturerDetails_address2: this.fb.control(null, [
			this.validators.maxLength(60, 'Address line 2'),
		]),
		techRecord_manufacturerDetails_postTown: this.fb.control(null, [
			this.validators.maxLength(60, 'Town or city'),
		]),
		techRecord_manufacturerDetails_address3: this.fb.control(null, [this.validators.maxLength(60, 'County')]),
		techRecord_manufacturerDetails_postCode: this.fb.control(null, [this.validators.maxLength(12, 'Postcode')]),
		techRecord_manufacturerDetails_telephoneNumber: this.fb.control(null, [
			this.validators.maxLength(25, 'Telephone number'),
		]),
		techRecord_manufacturerDetails_emailAddress: this.fb.control(null, [
			this.validators.maxLength(255, 'Email address'),
			this.validators.pattern(
				new RegExp("^[\\w\\-\\.\\+']+@([\\w-]+\\.)+[\\w-]{2,}$"),
				'Enter an email address in the correct format, like name@example.com'
			),
		]),
		techRecord_manufacturerDetails_faxNumber: this.fb.control(null, [
			this.validators.maxLength(25, 'Fax number'),
		]),
		techRecord_manufacturerDetails_manufacturerNotes: this.fb.control(null, [
			this.validators.maxLength(1024, 'Manufacturer notes'),
		]),
  });
}
