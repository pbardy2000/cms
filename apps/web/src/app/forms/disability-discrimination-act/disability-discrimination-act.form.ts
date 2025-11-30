import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseForm } from '../base-form/base-form.form';

@Component({
  selector: 'app-disability-discrimination-act-form',
  templateUrl: './disability-discrimination-act.form.html',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DisabilityDiscriminationActForm),
      multi: true,
    },
  ],
})
export class DisabilityDiscriminationActForm extends BaseForm {
  override form = this.fb.group({
    techRecord_dda_certificateIssued: this.fb.control<boolean | null>(null),
		techRecord_dda_wheelchairFittings: this.fb.control<string | null>(null, [
			this.validators.maxLength(250, 'Wheelchair fittings'),
		]),
		techRecord_dda_wheelchairLiftPresent: this.fb.control<boolean | null>(null),
		techRecord_dda_wheelchairLiftInformation: this.fb.control<string | null>(null, [
			this.validators.maxLength(250, 'Wheelchair lift information'),
		]),
		techRecord_dda_wheelchairRampPresent: this.fb.control<boolean | null>(null),
		techRecord_dda_wheelchairRampInformation: this.fb.control<string | null>(null, [
			this.validators.maxLength(250, 'Wheelchair ramp information'),
		]),
		techRecord_dda_minEmergencyExits: this.fb.control<number | null>(null, [
			this.validators.max(99, 'Minimum emergency exits required'),
		]),
		techRecord_dda_outswing: this.fb.control<string | null>(null, [this.validators.maxLength(250, 'Outswing')]),
		techRecord_dda_ddaSchedules: this.fb.control<string | null>(null, [
			this.validators.maxLength(250, 'DDA schedules'),
		]),
		techRecord_dda_seatbeltsFitted: this.fb.control<number | null>(null, [
			this.validators.max(999, 'Number of seatbelts fitted'),
		]),
		techRecord_dda_ddaNotes: this.fb.control<string | null>(null, [this.validators.maxLength(1024, 'DDA notes')]),
	
  });
}
