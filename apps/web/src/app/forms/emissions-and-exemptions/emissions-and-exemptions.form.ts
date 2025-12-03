import { Component, forwardRef, inject, input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { RadiosComponent } from '@app/components/radios/radios.component';
import { TextInputComponent } from '@app/components/text-input/text-input.component';
import { ForTagsDirective } from '@app/directives/for-tags.directive';
import { ConstantsService, TechRecord } from '@app/services/constants.service';
import { BaseForm } from '../base-form/base-form.form';

@Component({
  selector: 'app-emissions-and-exemptions-form',
  templateUrl: './emissions-and-exemptions.form.html',
  styleUrls: ['./emissions-and-exemptions.form.scss'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ForTagsDirective,
    RadiosComponent,
    TextInputComponent,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmissionsAndExemptionsForm),
      multi: true,
    },
  ],
})
export class EmissionsAndExemptionsForm extends BaseForm {
  readonly constants = inject(ConstantsService);

  readonly techRecord = input<TechRecord>();
  readonly filters = input<string[]>([]);

  override form = this.fb.group({
    techRecord_drawbarCouplingFitted: this.fb.control<boolean | null>(null),
    techRecord_euroStandard: this.fb.control<string | null>(null),
    techRecord_emissionsLimit: this.fb.control<number | null>(null, [
      this.validators.max(99, 'Emission limit (smoke absorption coefficient)'),
      this.validators.pattern(
        /^\d*(\.\d{0,5})?$/,
        'Emission limit (smoke absorption coefficient) max 5 decimal places',
      ),
    ]),
    techRecord_speedLimiterMrk: this.fb.control<boolean | null>(null),
    techRecord_tachoExemptMrk: this.fb.control<boolean | null>(null),
  });
}
