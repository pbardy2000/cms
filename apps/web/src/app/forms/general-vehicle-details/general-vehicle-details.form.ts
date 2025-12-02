import { Component, inject, input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxesComponent } from '@app/components/checkboxes/checkboxes.component';
import { DateInputComponent } from '@app/components/date-input/date-input.component';
import { RadiosComponent } from '@app/components/radios/radios.component';
import { SelectComponent } from '@app/components/select/select.component';
import { TextInputComponent } from '@app/components/text-input/text-input.component';
import { TypeaheadComponent } from '@app/components/typeahead/typeahead.component';
import { ForTagsDirective } from '@app/directives/for-tags.directive';
import { NoSpaceDirective } from '@app/directives/no-space.directive';
import { ToUppercaseDirective } from '@app/directives/to-uppercase.directive';
import { TrimWhitespaceDirective } from '@app/directives/trim-whitespace.directive';
import { ConstantsService, TechRecord } from '@app/services/constants.service';
import { BaseForm } from '../base-form/base-form.form';

@Component({
  selector: 'app-general-vehicle-details',
  templateUrl: './general-vehicle-details.form.html',
  styleUrls: ['./general-vehicle-deetails.scss'],
  imports: [
    TextInputComponent,
    RadiosComponent,
    SelectComponent,
    FormsModule,
    ReactiveFormsModule,
    DateInputComponent,
    CheckboxesComponent,
    TypeaheadComponent,
    TrimWhitespaceDirective,
    NoSpaceDirective,
    ToUppercaseDirective,
    ForTagsDirective,
  ],
})
export class GeneralVehicleDetailsForm extends BaseForm {
  readonly constants = inject(ConstantsService);

  readonly techRecord = input<TechRecord>();
  readonly filters = input<string[]>([]);

  override form = this.fb.group({
    techRecord_vehicleType: this.fb.control<string | undefined>(undefined),
    techRecord_vehicleClass_description: this.fb.control<string | undefined>(undefined),
    techRecord_regnDate: this.fb.control<string | null | undefined>(undefined, [
      this.validators.date('Date of first registration'),
    ]),
    techRecord_manufactureYear: this.fb.control<number | null | undefined>(undefined, [
      this.validators.min(1000, 'Year of manufacture must be greater than or equal to 1000'),
    ]),
    techRecord_brakes_dtpNumber: this.fb.control<string | null>(null, [
      this.validators.maxLength(6, 'DTp number must be less than or equal to 6 characters'),
    ]),
    techRecord_make: this.fb.control<string | null>(null, [
      this.validators.maxLength(50, 'Body make must be less than or equal to 50 characters'),
    ]),
    techRecord_model: this.fb.control<string | null>(null, [
      this.validators.maxLength(30, 'Body model must be less than or equal to 30 characters'),
    ]),
    techRecord_vehicleConfiguration: this.fb.control<string | null | undefined>(undefined, [
      this.validators.required('Vehicle configuration is required'),
    ]),
    techRecord_bodyType_code: this.fb.control<string | null | undefined>(undefined),
    techRecord_bodyType_description: this.fb.control<string | null | undefined>(undefined, [
      this.validators.required('Body type is required'),
    ]),
    techRecord_bodyMake: this.fb.control<string | null | undefined>(
      { value: undefined, disabled: true },
      [],
    ),
    techRecord_bodyModel: this.fb.control<string | null | undefined>(null, [
      this.validators.maxLength(20, 'Body model must be less than or equal to 20 characters'),
    ]),
    techRecord_functionCode: this.fb.control<string | null | undefined>(undefined),
    techRecord_conversionRefNo: this.fb.control<string | null | undefined>(undefined, [
      this.validators.maxLength(10, 'Conversion reference number must be 10 characters or less'),
      this.validators.pattern(
        new RegExp('^[A-Z0-9 ]{0,10}$'),
        'Conversion reference number must only include numbers and letters A to Z',
      ),
    ]),
    techRecord_euVehicleCategory: this.fb.control<string | null | undefined>(undefined),
    techRecord_noOfAxles: this.fb.control<number | null | undefined>(undefined),
    techRecord_manufactureMonth: this.fb.control<string | null | undefined>(undefined),
    techRecord_chassisMake: this.fb.control<string | null | undefined>(
      { value: undefined, disabled: true },
      [],
    ),
    techRecord_chassisModel: this.fb.control<string | null | undefined>(
      { value: undefined, disabled: true },
      [],
    ),
    techRecord_numberOfWheelsDriven: this.fb.control<number | null | undefined>(undefined),
    techRecord_modelLiteral: this.fb.control<string | null | undefined>(undefined),
    techRecord_vehicleSubclass: this.fb.control<string | null | undefined>(undefined),
    techRecord_firstUseDate: this.fb.control<string | null | undefined>(undefined, [
      this.validators.date('Date of first use'),
    ]),
    techRecord_frameDescription: this.fb.control<string | null | undefined>(undefined, []),
  });
}
