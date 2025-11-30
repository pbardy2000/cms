import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseForm } from '../base-form/base-form.form';

@Component({
  selector: 'app-emissions-and-exemptions-form',
  templateUrl: './emissions-and-exemptions.form.html',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmissionsAndExemptionsForm),
      multi: true,
    },
  ],
})
export class EmissionsAndExemptionsForm extends BaseForm {
  override form = this.fb.group({
    techRecord_drawbarCouplingFitted: this.fb.control<boolean | null>(null),
    techRecord_euroStandard: this.fb.control<string | null>(null),
    techRecord_emissionsLimit: this.fb.control<number | null>(null, [
      this.validators.max(99, 'Emission limit (smoke absorption coefficient)'),
      this.validators.pattern(
        /^\d*(\.\d{0,5})?$/,
        'Emission limit (smoke absorption coefficient) max 5 decimal places'
      ),
    ]),
    techRecord_speedLimiterMrk: this.fb.control<boolean | null>(null),
    techRecord_tachoExemptMrk: this.fb.control<boolean | null>(null),
  
  });
}
