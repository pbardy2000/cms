import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonGroupComponent } from '@app/components/button-group/button-group.component';
import { ButtonComponent } from '@app/components/button/button.component';
import { CheckboxComponent } from '@app/components/checkbox/checkbox.component';
import { RadiosComponent } from '@app/components/radios/radios.component';
import { TextInputComponent } from '@app/components/text-input/text-input.component';
import { NoSpaceDirective } from '@app/directives/no-space.directive';
import { ToUppercaseDirective } from '@app/directives/to-uppercase.directive';
import { TrimWhitespaceDirective } from '@app/directives/trim-whitespace.directive';
import { ConstantsService, VehicleStatus, VehicleType } from '@app/services/constants.service';
import { ValidatorsService } from '@app/services/validators.service';
import { ReplaySubject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-create-technical-record',
  templateUrl: './create-technical-record.page.html',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    ButtonGroupComponent,
    TextInputComponent,
    RadiosComponent,
    CheckboxComponent,
    ToUppercaseDirective,
    NoSpaceDirective,
    TrimWhitespaceDirective,
  ],
})
export class CreateTechnicalRecordPage {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly validators = inject(ValidatorsService);
  readonly constants = inject(ConstantsService);

  private readonly destroy = new ReplaySubject<boolean>(1);

  readonly form = this.fb.group({
    vin: this.fb.nonNullable.control<string>('', [
      this.validators.alphanumeric('Vehicle Identification Number (VIN)'),
      this.validators.pattern(new RegExp('^(?!.*[OIQ]).*$'), {
        href: 'vin',
        label: 'Vehicle Identification Number (VIN) should not contain O, I or Q',
      }),
      this.validators.required('Vehicle Identification Number (VIN)'),
      this.validators.minLength(3, 'Vehicle Identification Number (VIN)'),
      this.validators.maxLength(21, 'Vehicle Identification Number (VIN)'),
    ]),
    generateID: this.fb.nonNullable.control<boolean>(false),
    vrm: this.fb.nonNullable.control<string>(''),
    trailerId: this.fb.nonNullable.control<string>(''),
    vrmTrm: this.fb.nonNullable.control<string>('', this.vrmTrmValidators),
    status: this.fb.nonNullable.control<VehicleStatus>('PROVISIONAL', [
      this.validators.required('Vehicle status'),
    ]),
    type: this.fb.nonNullable.control<VehicleType>('hgv', [
      this.validators.required('Vehicle type'),
    ]),
  });

  ngOnInit(): void {
    this.form.controls.generateID.valueChanges
      .pipe(takeUntil(this.destroy))
      .subscribe((generateID) => {
        this.form.controls.vrmTrm.setValidators(generateID ? [] : this.vrmTrmValidators);
        this.form.controls.vrmTrm.updateValueAndValidity();
      });
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.complete();
  }

  get vrmTrmValidators(): ValidatorFn[] {
    return [
      this.validators.alphanumeric('Vehicle Registration Mark (VRM) or Trailer ID'),
      this.validators.required('Vehicle Registration Mark (VRM) or Trailer ID'),
      this.validators.antipattern(new RegExp('/^[0-9]{7}[zZ]$/'), {
        href: 'vrmTrm',
        label:
          'Vehicle Registration Mark (VRM) or Trailer ID must be 7 characters and end with a Z',
      }),
    ];
  }

  onContinue(): void {
    this.router.navigate(['/technical-records/create/details']);

    this.form.markAllAsTouched();

    if (this.form.valid) {
    }
  }

  onCancel(): void {}
}
