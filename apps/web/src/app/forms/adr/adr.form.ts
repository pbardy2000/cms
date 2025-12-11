import { Component, forwardRef, inject, input } from '@angular/core';
import {
  AbstractControl,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { CheckboxComponent } from '@app/components/checkbox/checkbox.component';
import { CheckboxesComponent } from '@app/components/checkboxes/checkboxes.component';
import { DateInputComponent } from '@app/components/date-input/date-input.component';
import { RadioComponent } from '@app/components/radio/radio.component';
import { RadiosComponent } from '@app/components/radios/radios.component';
import { SelectComponent } from '@app/components/select/select.component';
import { TextInputComponent } from '@app/components/text-input/text-input.component';
import { TextareaComponent } from '@app/components/textarea/textarea.component';
import { ForTagsDirective } from '@app/directives/for-tags.directive';
import { ConstantsService, TechRecord } from '@app/services/constants.service';
import { TechRecordService } from '@app/services/tech-record.service';
import { BaseForm } from '../base-form/base-form.form';

@Component({
  selector: 'app-adr-form',
  templateUrl: './adr.form.html',
  styleUrls: ['./adr.form.scss'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ForTagsDirective,
    RadiosComponent,
    RadioComponent,
    SelectComponent,
    TextInputComponent,
    CheckboxComponent,
    CheckboxesComponent,
    DateInputComponent,
    TextareaComponent,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AdrForm),
      multi: true,
    },
  ],
})
export class AdrForm extends BaseForm {
  readonly constants = inject(ConstantsService);
  readonly techRecordService = inject(TechRecordService);

  readonly techRecord = input<TechRecord>();
  readonly filters = input<string[]>([]);

  override form = this.fb.group(
    {
      techRecord_adrDetails_dangerousGoods: this.fb.control<boolean | null>(false),

      // Applicant details
      techRecord_adrDetails_applicantDetails_name: this.fb.control<string | null>(null, [
        this.validators.maxLength(150, 'Name'),
      ]),
      techRecord_adrDetails_applicantDetails_street: this.fb.control<string | null>(null, [
        this.validators.maxLength(60, 'Address line 1'),
      ]),
      techRecord_adrDetails_applicantDetails_town: this.fb.control<string | null>(null, [
        this.validators.maxLength(60, 'Address line 2'),
      ]),
      techRecord_adrDetails_applicantDetails_city: this.fb.control<string | null>(null, [
        this.validators.maxLength(60, 'Town or city'),
      ]),
      techRecord_adrDetails_applicantDetails_postcode: this.fb.control<string | null>(null, [
        this.validators.maxLength(12, 'Postcode'),
      ]),

      // ADR details
      techRecord_adrDetails_vehicleDetails_type: this.fb.control<string | null>(null, [
        // ADR body type is required with approved to carry dangerous goods
      ]),
      techRecord_adrDetails_vehicleDetails_usedOnInternationalJourneys: this.fb.control<
        string | null
      >(null),
      techRecord_adrDetails_dateProcessed: this.fb.control<string | null>(null, [
        this.validators.date('Date processed'),
      ]),
      techRecord_adrDetails_permittedDangerousGoods: this.fb.control<string[] | null>(null),
      techRecord_adrDetails_additionalNotes_number: this.fb.control<string[] | null>(null),
      techRecord_adrDetails_adrTypeApprovalNo: this.fb.control<string | null>(null, [
        this.validators.maxLength(10, 'ADR type approval number'),
      ]),
      techRecord_adrDetails_compatibilityGroupJ: this.fb.control<string | null>(null),
      techRecord_adrDetails_bodyDeclaration_type: this.fb.control<string | null>(null),
      techRecord_adrDetails_newCertificateRequested: this.fb.control<boolean | null>(null),

      // Tank details
      techRecord_adrDetails_tank_tankDetails_tankManufacturer: this.fb.control<string | null>(
        null,
        [this.validators.maxLength(100, 'Tank manufacturer')],
      ),
      techRecord_adrDetails_tank_tankDetails_yearOfManufacture: this.fb.control<number | null>(
        null,
        [
          this.validators.min(1900, 'Year of manufacture'),
          this.validators.max(2100, 'Year of manufacture'),
        ],
      ),
      techRecord_adrDetails_tank_tankDetails_tankManufacturerSerialNo: this.fb.control<
        string | null
      >(null, [this.validators.maxLength(10, 'Tank manufacturer serial number')]),
      techRecord_adrDetails_tank_tankDetails_tankTypeAppNo: this.fb.control<string | null>(null, [
        this.validators.maxLength(10, 'Tank type approval number'),
      ]),
      techRecord_adrDetails_tank_tankDetails_tankCode: this.fb.control<string | null>(null, [
        this.validators.maxLength(20, 'Tank code'),
      ]),
      techRecord_adrDetails_tank_tankDetails_specialProvisions: this.fb.control<string | null>(
        null,
        [this.validators.maxLength(500, 'Special provisions')],
      ),

      // Tank statements

      // Declarations seen
      techRecord_adrDetails_brakeDeclarationsSeen: this.fb.control<boolean | null>(null),
      techRecord_adrDetails_brakeDeclarationIssuer: this.fb.control<string | null>(null, [
        this.validators.maxLength(100, 'Brake declaration issuer'),
      ]),
      techRecord_adrDetails_brakeEndurance: this.fb.control<boolean | null>(null),
      techRecord_adrDetails_weight: this.fb.control<number | null>(null, [
        this.validators.min(0, 'Weight must be greater than 0'),
        this.validators.max(10000, 'Weight must be less than 10000'),
      ]),
      techRecord_adrDetails_declarationsSeen: this.fb.control<boolean | null>(null),
    },
    { validators: [this.requiredWithApprovedToCarryDangerousGoods()] },
  );

  requiredWithApprovedToCarryDangerousGoods(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const a = control.get('techRecord_adrDetails_dangerousGoods');

      if (a && a.value === true) {
        const b = control.get('techRecord_adrDetails_vehicleDetails_type')!;
        const c = control.get('techRecord_adrDetails_permittedDangerousGoods')!;
        const d = control.get('techRecord_adrDetails_additionalNotes_number')!;
        const e = control.get('techRecord_adrDetails_adrTypeApprovalNo')!;

        this.validators.toggle(b, this.validators.required('ADR Body type'));
        this.validators.toggle(c, this.validators.required('Permited dangerous goods'));
        this.validators.toggle(d, this.validators.required('Guidance notes'));
        this.validators.toggle(e, this.validators.required('ADR type approval number'));
      }

      return null;
    };
  }
}
