import { Component, forwardRef, inject, input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { DateInputComponent } from '@app/components/date-input/date-input.component';
import { RadiosComponent } from '@app/components/radios/radios.component';
import { TextInputComponent } from '@app/components/text-input/text-input.component';
import { ConstantsService, TechRecord } from '@app/services/constants.service';
import { BaseForm } from '../base-form/base-form.form';

@Component({
  selector: 'app-seats-and-vehicle-size-form',
  templateUrl: './seats-and-vehicle-size.form.html',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DateInputComponent,
    TextInputComponent,
    RadiosComponent,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SeatsAndVehicleSizeForm),
      multi: true,
    },
  ],
})
export class SeatsAndVehicleSizeForm extends BaseForm {
  readonly constants = inject(ConstantsService);

  readonly techRecord = input<TechRecord>();
  readonly filters = input<string[]>([]);

  override form = this.fb.group({
    techRecord_seatsUpperDeck: this.fb.control<number | null>(null, [
      this.validators.max(99, 'Upper deck seats must be less than or equal to 99'),
    ]),
    techRecord_seatsLowerDeck: this.fb.control<number | null>(null, [
      this.validators.max(999, 'Lower deck seats must be less than or equal to 999'),
    ]),
    techRecord_standingCapacity: this.fb.control<number | null>(null, [
      this.validators.max(999, 'Standing capacity must be less than or equal to 999'),
    ]),
    techRecord_dda_wheelchairCapacity: this.fb.control<number | null>(null, [
      this.validators.max(99, 'Wheelchair capacity must be less than or equal to 99'),
    ]),
    techRecord_vehicleClass_description: this.fb.control<string | null>(null, [
      this.validators.required('Vehicle class'),
    ]),
    techRecord_vehicleSize: this.fb.control<string | null>(null, [
      this.validators.required('Vehicle size'),
    ]),
    techRecord_numberOfSeatbelts: this.fb.control<string | null>(null, [
      this.validators.max(150, 'Number of seatbelts must be less than or equal to 150'),
    ]),
    techRecord_seatbeltInstallationApprovalDate: this.fb.control<string | null>(null, [
      this.validators.date('Seatbelt installation approval date'),
    ]),
  });
}
